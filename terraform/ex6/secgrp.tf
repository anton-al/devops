resource "aws_security_group" "terra-sg" {
  vpc_id      = aws_vpc.terra-vpc.id
  name        = "Terra-SG"
  description = "Terra Security Group"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = [var.MYIP_CIDR]
    description = "Allow ssh access"
  }

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
    description = "Allow http access"
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "Terra-SG"
  }
}