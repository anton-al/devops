variable "REGION" {
  default = "us-east-1"
}

variable "ZONE1" {
  default = "us-east-1a"
}

variable "AMIS" {
  type = map(string)
  default = {
    "us-east-1" = "ami-0230bd60aa48260c6"
    "us-east-2" = "ami-06d4b7182ac3480fa"
  }
}