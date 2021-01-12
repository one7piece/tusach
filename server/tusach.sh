#!/bin/bash
# tusach.sh
#
# BASH/Korn Shell script for running the DV tusach
#
# Application
APP_NAME=tusach_amd64
MYARCH=$(uname -m)
if [ "$MYARCH" == "aarch64" ] || [ "$MYARCH" == "arm64" ]; then
APP_NAME=tusach_arm64
fi
export APP_NAME

ABSPATH="$( cd "$(dirname "$0")" ; pwd -P )"
export ABSPATH
echo ABSPATH=$ABSPATH
echo "Starting $APP_NAME..."
$ABSPATH/$APP_NAME -configFile=$ABSPATH/config.json
