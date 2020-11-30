resource "google_dataproc_cluster" "mycluster" {
    name       = "mycluster"
    region     = "${var.GCP_REGION_CLUSTER}"
	labels {
        foo = "bar"
    }

    cluster_config {
       
	master_config {
            num_instances     = 1
            machine_type      = "${var.GCP_MACHINE_TYPE}"
            disk_config {
                boot_disk_type = "pd-ssd"
                boot_disk_size_gb = "${var.DISK_SIZE}"
            }
        }

        worker_config {
            num_instances     = 3
            machine_type      = "${var.GCP_MACHINE_TYPE}"
            disk_config {
                boot_disk_size_gb = "${var.DISK_SIZE}"
                num_local_ssds    = 1
            }
        }

        preemptible_worker_config {
            num_instances     = 0
        }

        # Override or set some custom properties
        software_config {
            image_version       = "1.3.7-deb9"
            override_properties = {
                "dataproc:dataproc.allow.zero.workers" = "true"
            }
        }

        gce_cluster_config {
            #network = "${google_compute_network.dataproc_network.name}"
            tags    = ["foo", "bar"]
        }

        # You can define multiple initialization_action blocks
        initialization_action {
            script      = "gs://dataproc-initialization-actions/stackdriver/stackdriver.sh"
            timeout_sec = 500
        }

    }
}
