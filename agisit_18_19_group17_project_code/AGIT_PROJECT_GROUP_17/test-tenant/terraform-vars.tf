# How to define variables in terraform:
# https://www.terraform.io/docs/configuration/variables.html


# Name of the project, replace "XX" for your
# respective group ID
variable "GCP_PROJECT_NAME" {
    default = "agisit1819-17-224811"
}

# A list of machine types is found at:
# https://cloud.google.com/compute/docs/machine-types
# prices are defined per region, before choosing an instance
# check the cost at: https://cloud.google.com/compute/pricing#machinetype
# Minimum required for Hadoop
variable "GCP_MACHINE_TYPE" {
    default = "n1-standard-1"
}

# Regions list is found at:
# https://cloud.google.com/compute/docs/regions-zones/regions-zones?hl=en_US
# For prices of your deployment check:
# Compute Engine dashboard -> VM instances -> Zone
variable "GCP_REGION" {
    default = "europe-west1-b"
}

variable "GCP_REGION_CLUSTER" {
    default = "europe-west1"
}


# Hadoop specific
# Minimum required
variable "DISK_SIZE" {
    default = "15"
}
