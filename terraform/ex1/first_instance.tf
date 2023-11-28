provider "aws" {
  region = "us-east-1"
  #  access_key = ""
  #  secret_key = ""
}

resource "aws_instance" "intro" {
  ami                    = "ami-0230bd60aa48260c6"
  instance_type          = "t2.micro"
  availability_zone      = "us-east-1a"
  key_name               = "vprofile-prod-key"
  vpc_security_group_ids = ["sg-0144bdca62c5327ad"]
  tags = {
    Name    = "Terra-Instance"
    Project = "Terra"
  }
}