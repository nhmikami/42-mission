#!/bin/bash

if [ $# -eq 0 ]; then
    echo "No arguments supplied."
else
    i=1
    while [ $i -le $(( $# < 3 ? $# : 3)) ];
    do
        echo "${!i}"
        ((i++));
    done
fi