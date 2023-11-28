resource "aws_instance" "terra-instance" {
  ami                    = var.AMIS[var.REGION]
  instance_type          = "t2.micro"
  availability_zone      = var.ZONE1
  key_name               = "vprofile-prod-key"
  vpc_security_group_ids = ["sg-0144bdca62c5327ad"]
  tags = {
    Name    = "Terra-Instance"
    Project = "Terra"
  }
}