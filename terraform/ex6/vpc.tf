resource "aws_vpc" "terra-vpc" {
  cidr_block           = "10.0.0.0/16"
  instance_tenancy     = "default"
  enable_dns_support   = true
  enable_dns_hostnames = true
  tags = {
    Name = "Terra-VPC"
  }
}

resource "aws_subnet" "terra-subnet-pub-1" {
  vpc_id                  = aws_vpc.terra-vpc.id
  cidr_block              = "10.0.1.0/24"
  map_public_ip_on_launch = true
  availability_zone       = var.ZONE1
  tags = {
    Name = "Terra-Subnet-Pub-1"
  }
}

resource "aws_subnet" "terra-subnet-pub-2" {
  vpc_id                  = aws_vpc.terra-vpc.id
  cidr_block              = "10.0.2.0/24"
  map_public_ip_on_launch = true
  availability_zone       = var.ZONE2
  tags = {
    Name = "Terra-Subnet-Pub-2"
  }
}

resource "aws_subnet" "terra-subnet-pub-3" {
  vpc_id                  = aws_vpc.terra-vpc.id
  cidr_block              = "10.0.3.0/24"
  map_public_ip_on_launch = true
  availability_zone       = var.ZONE3
  tags = {
    Name = "Terra-Subnet-Pub-3"
  }
}

resource "aws_subnet" "terra-subnet-priv-1" {
  vpc_id                  = aws_vpc.terra-vpc.id
  cidr_block              = "10.0.4.0/24"
  map_public_ip_on_launch = false
  availability_zone       = var.ZONE1
  tags = {
    Name = "Terra-Subnet-Priv-1"
  }
}

resource "aws_subnet" "terra-subnet-priv-2" {
  vpc_id                  = aws_vpc.terra-vpc.id
  cidr_block              = "10.0.5.0/24"
  map_public_ip_on_launch = false
  availability_zone       = var.ZONE2
  tags = {
    Name = "Terra-Subnet-Pub-2"
  }
}

resource "aws_subnet" "terra-subnet-priv-3" {
  vpc_id                  = aws_vpc.terra-vpc.id
  cidr_block              = "10.0.6.0/24"
  map_public_ip_on_launch = false
  availability_zone       = var.ZONE3
  tags = {
    Name = "Terra-Subnet-Pub-3"
  }
}

resource "aws_internet_gateway" "terra-IGW" {
  vpc_id = aws_vpc.terra-vpc.id
  tags = {
    Name = "Terra-IGW"
  }
}

resource "aws_route_table" "terra-RT-pub" {
  vpc_id = aws_vpc.terra-vpc.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.terra-IGW.id
  }

  tags = {
    Name = "Terra-RT-Pub"
  }
}

resource "aws_route_table_association" "terra-route-assoc-pub-1" {
  subnet_id      = aws_subnet.terra-subnet-pub-1.id
  route_table_id = aws_route_table.terra-RT-pub.id
}

resource "aws_route_table_association" "terra-route-assoc-pub-2" {
  subnet_id      = aws_subnet.terra-subnet-pub-2.id
  route_table_id = aws_route_table.terra-RT-pub.id
}

resource "aws_route_table_association" "terra-route-assoc-pub-3" {
  subnet_id      = aws_subnet.terra-subnet-pub-3.id
  route_table_id = aws_route_table.terra-RT-pub.id
}