terraform {
  backend "s3" {
    bucket = "terra-state-bucket-anton"
    key    = "terraform/backend"
    region = "us-east-1"
  }
}