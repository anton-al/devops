resource "aws_key_pair" "terra-key" {
  key_name   = "terra-key"
  public_key = file(var.PUB_KEY)
}

resource "aws_instance" "terra-inst-web" {
  ami                    = var.AMIS[var.REGION]
  instance_type          = "t2.micro"
  subnet_id              = aws_subnet.terra-subnet-pub-1.id
  availability_zone      = var.ZONE1
  key_name               = aws_key_pair.terra-key.key_name
  vpc_security_group_ids = [aws_security_group.terra-sg.id]
  tags = {
    Name    = "Terra-Instance"
    Project = "Terra"
  }

  provisioner "file" {
    source      = "web.sh"
    destination = "/tmp/web.sh"
  }

  provisioner "remote-exec" {
    inline = [
      "chmod u+x /tmp/web.sh",
      "sudo /tmp/web.sh"
    ]
  }

  connection {
    user        = var.USER
    private_key = file(var.PRIV_KEY)
    host        = self.public_ip
  }
}

resource "aws_ebs_volume" "vol-terra" {
  availability_zone = var.ZONE1
  size              = 3
  tags = {
    Name = "Terra-EBS"
  }
}

resource "aws_volume_attachment" "terra-volume-attach" {
  device_name = "/dev/xvdh"
  instance_id = aws_instance.terra-inst-web.id
  volume_id   = aws_ebs_volume.vol-terra.id
}

output "PublicIp" {
  value = aws_instance.terra-inst-web.public_ip
}
