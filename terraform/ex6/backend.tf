terraform {
  backend "s3" {
    bucket = "terra-state-bucket-anton"
    key    = "terraform/backend-ex6"
    region = "us-east-1"
  }
}