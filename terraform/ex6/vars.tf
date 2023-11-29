variable "REGION" {
  default = "us-east-1"
}

variable "ZONE1" {
  default = "us-east-1a"
}

variable "ZONE2" {
  default = "us-east-1b"
}

variable "ZONE3" {
  default = "us-east-1c"
}

variable "AMIS" {
  type = map(string)
  default = {
    "us-east-1" = "ami-0230bd60aa48260c6"
    "us-east-2" = "ami-06d4b7182ac3480fa"
  }
}

variable "USER" {
  default = "ec2-user"
}

variable "PUB_KEY" {
  default = "terrakey.pub"
}

variable "PRIV_KEY" {
  default = "terrakey"
}

variable "MYIP_CIDR" {
  default = "112.134.155.165/32"
}