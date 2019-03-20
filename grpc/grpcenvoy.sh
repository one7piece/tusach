#!/bin/bash

if [ "$1" = "" ]; then
echo "Usage: ./grpcenvoy.sh <envoy-config-file>"
exit 1
fi

containerId=grpcenvoy
imageId=envoyproxy/envoy:latest
#sudo docker stop $containerId
#sudo docker rm $containerId
# -P : publish all exposed ports to host interface 
net_args="--network host -P"
mnt_args="--mount type=bind,source=/home/dvan/tusach/dist/envoy,target=/envoy"
cmd_args="/usr/local/bin/envoy -c /envoy/$1 -l debug"
# run in interactive mode(-it), remove container (--rm)
sudo docker run -it --rm --name $containerId $net_args $mnt_args $imageId $cmd_args

