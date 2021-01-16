#!/bin/bash

gcloud compute scp ./d_emitter.dat mycluster-m:/home/vagrant/ --zone europe-west1-d

gcloud compute ssh --zone europe-west1-d mycluster-m  -- 'cd /home/vagrant && sudo chmod +x map_red.py'

gcloud compute ssh --zone europe-west1-d mycluster-m  -- 'cd /home/vagrant && sudo chmod +x ./emitter_verbose.exe'

gcloud compute ssh --zone europe-west1-d mycluster-m  -- 'cd /home/vagrant && ./emitter_verbose.exe < d_emitter.dat'

gcloud compute ssh --zone europe-west1-d mycluster-m  -- 'gsutil cp ./bigfile.txt gs://dataproc-f9a034e0-0019-4077-90e6-f8b71401b8ad-europe-west1/input/bigfile.txt'

gcloud dataproc jobs submit pyspark --region europe-west1 --cluster mycluster file:///home/vagrant/map_red.py -- gs://dataproc-f9a034e0-0019-4077-90e6-f8b71401b8ad-europe-west1/input/bigfile.txt


