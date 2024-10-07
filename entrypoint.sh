#!/bin/bash

chmod +x /app/wait-for-it.sh

/bin/bash /app/wait-for-it.sh $POSTGRES_HOST:$POSTGRES_PORT -t 300 -- npm start