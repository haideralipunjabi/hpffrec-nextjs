#!/bin/bash
flag="skip-build"
if [[ "$VERCEL_GIT_COMMIT_MESSAGE" == *$flag* ]]; then
    exit 0;
else
    exit 1;
fi