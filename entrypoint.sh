#!/bin/bash

chmod +x /app/wait-for-it.sh
rm -rf node_modules
npm i bcrypt --unsafe-perm=true --allow-root --save

/bin/bash /app/wait-for-it.sh postgres-db:5432 -t 300 -- npm start