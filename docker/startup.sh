#!/bin/bash

# NOTE: when starting container, make sure to mount tusachmnt

/usr/local/bin/envoy -l debug -c /tusach/grpcenvoy.yaml > /tusachmnt/envoy_console.log &

/tusach/tusach.sh > /tusachmnt/tusach_console.log &

# wait for any process to exit
wait -n

# exit with status of process that exited first
exit $?