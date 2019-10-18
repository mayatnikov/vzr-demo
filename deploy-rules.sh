#!/bin/bash
# deploy правил расчета ВЗР (demo)
#
curl -w "\n" \
-H "Accept: application/json" \
-F "vzr-rules.dmn=@vzr-rules.dmn" \
-F "deployment-name=VZR" \
-F "tenant-id=vzr" \
-F "enable-duplicate-filtering=false" \
-F "deploy-changed-only=falses" \
http://10.50.73.119:8084/engine-rest/deployment/create