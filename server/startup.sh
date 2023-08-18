#!/bin/bash
/usr/local/bin/envoy -c /tusach/grpcenvoy.yaml -l debug > /tusachmnt/envoy_console.log &

/tusach/tusach.sh > /tusachmnt/tusach_console.log &

# wait for any process to exit
wait -n

# exit with status of process that exited first
exit $?