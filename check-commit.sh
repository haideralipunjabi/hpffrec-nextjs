#!/bin/bash
flag="skip-build"
if [[ "$(git show-branch --no-name HEAD)" == *$flag* ]]; then
    exit 0;
else
    exit 1;
fi