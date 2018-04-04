# LOGIC

CHROME_PIDS=`pidof chrome`
PORT_PIDS=`lsof -t -i tcp:3000`

for pid in $PORT_PIDS
do

if [[ ${CHROME_PIDS} != *$pid* ]];then

    # NOT FOUND IN CHROME PIDS

    echo "Killing $pid..."
    ps -p "$pid"

    kill -kill "$pid"
    fi

done

sails lift
# OR 'node app' OR whatever that starts your node

exit