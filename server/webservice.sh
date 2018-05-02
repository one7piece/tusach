#!/bin/bash
#
# Get function from functions library
. /etc/init.d/functions
# Start the service MAT
start() {
        initlog -c "echo -n Starting tusach: "
        /home/pi/webserver/tusach -configFile=/home/pi/webserver/config.json >/dev/null 2>&1 &
        ### Create the lock file ###
        touch /var/lock/subsys/tusach
        success $"webserver startup"
        echo
}
# Restart the service webserver
stop() {
        initlog -c "echo -n Stopping tusach: "
        killproc tusach
        ### Now, delete the lock file ###
        rm -f /var/lock/subsys/tusach
        echo
}
### main logic ###
case "$1" in
  start)
        start
        ;;
  stop)
        stop
        ;;
  status)
        status tusach
        ;;
  restart|reload|condrestart)
        stop
        start
        ;;
  *)
        echo $"Usage: $0 {start|stop|restart|reload|status}"
        exit 1
esac
exit 0