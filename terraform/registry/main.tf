terraform {
  required_version = ">=1.1.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.14.0"
    }

    random = {
      source  = "hashicorp/random"
      version = ">= 3.2.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
}

resource "aws_ecr_repository" "repository" {
  name                 = var.registry_name
  image_tag_mutability = "MUTABLE"

  tags = {
    Name = var.registry_name
  }
}

resource "aws_ecs_cluster" "cluster" {
  name = var.cluster_name
}
