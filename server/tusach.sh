#
# tusach.sh
#
# BASH/Korn Shell script for running the DV tusach
#

# Application
APP_NAME="tusach"
export APP_NAME

ABSPATH="$( cd "$(dirname "$0")" ; pwd -P )"
export ABSPATH
echo ABSPATH=$ABSPATH
PIDFILE=$ABSPATH/$APP_NAME.pid
export PIDFILE
pid=""

getpid() {
  pid=`ps -ef | grep 'tusach -configFile' | grep -v grep | awk '{ print $2}'`
}

start() {
    echo "Starting $APP_NAME..."
		getpid
		if [ "X$pid" = "X" ]
    then
      echo Running $APP_NAME ...
			$ABSPATH/tusach -configFile=$ABSPATH/config.json >/dev/null 2>&1 &
			getpid
			echo $pid > $PIDFILE
    else
        echo "$APP_NAME is already running."
        exit 1
    fi
}

stopit() {
    getpid
    if [ "X$pid" = "X" ]
    then
      echo "$APP_NAME was not running."
    else
			# Running so try to stop it.
			echo "Stopping $APP_NAME..."
			kill $pid
			if [ $? -ne 0 ]
			then
					# An explanation for the failure should have been given
					echo "Unable to stop $APP_NAME."
					exit 1
			fi
		fi		
}

status() {
    getpid
    if [ "X$pid" = "X" ]
    then
        echo "$APP_NAME is not running."
        exit 1
    else
        echo "$APP_NAME is running ($pid)."
        exit 0
    fi
}

case "$1" in

    'start')
        start
        ;;

    'stop')
        stopit
        ;;

    'restart')
        stopit
        start
        ;;

    'status')
        status
        ;;

    *)
        echo "Usage: $0 { start | stop | restart | status }"
        exit 1
        ;;
esac

exit 0
