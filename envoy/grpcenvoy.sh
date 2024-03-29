#!/bin/bash

#sudo service docker start

# Absolute path to this script. /home/user/bin/foo.sh
SCRIPT=$(readlink -f $0)
# Absolute path this script is in. /home/user/bin
SCRIPTPATH=`dirname $SCRIPT`
echo SCRIPTPATH=$SCRIPTPATH
configFile=$1
containerId=grpcenvoy
imageId=envoyproxy/envoy-dev:latest

#sudo docker stop $containerId
#sudo docker rm $containerId
# -P : publish all exposed ports to host interface 
net_args="--network host -P"
mnt_args="--mount type=bind,source=$SCRIPTPATH,target=/tusach"
cmd_args="/usr/local/bin/envoy -c /tusach/$configFile -l debug"
# run in interactive mode(-it), remove container (--rm)
#sudo docker run -e ENVOY_UID=0 -it --rm --name $containerId $net_args $mnt_args $imageId $cmd_args
# run in background mode(-d), remove container (--rm)
sudo docker run -e ENVOY_UID=0 --log-path /tusach/log/envoy_console.log -d --rm --name $containerId $net_args $mnt_args $imageId $cmd_args

