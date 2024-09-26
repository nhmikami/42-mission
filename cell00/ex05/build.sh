#!/bin/bash

if [ $# -eq 0 ]; then
    echo "No arguments supplied."
else
    for (( i=1; i<=$#; i++ ));
    do
        mkdir "ex${!i}"
    done
fi