#!/bin/bash

#####
# Helper script for pretty formatting of json files
#####

for file in `ls -a app/consultants | grep -v \\\.\$`; do
  cat app/consultants/$file | python -mjson.tool > tmp.json
  rm app/consultants/$file
  mv tmp.json app/consultants/$file
done
