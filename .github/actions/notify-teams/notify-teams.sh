#!/usr/bin/env bash
set -e

# First argument is the webhook url
# Second argument is the notification summary of the message
# Third argument is the header of the card
# Forth argument is Github context in JSON format (e.g. toJson(github))
# Fifth argument is a json structure (e.g toJson(steps) )

WEBHOOK_URL=$1

SERVER_URL=$(echo $4 | jq -r .server_url)
REPOSITORY=$(echo $4 | jq -r .repository)
RUN_ID=$(echo $4 | jq -r .run_id)

RUN_URL=$SERVER_URL/$REPOSITORY/actions/runs/$RUN_ID
MESSAGE="$RUN_URL "

STEPS=$(echo $5 | jq '. | keys[]' || true)

SECTIONS="[{'activityTitle': '$3','activityImage': '$6','facts': ["
COMMA=""
for STEP in $STEPS; do
    result=$(echo $5 | jq -r .["$STEP"].conclusion || true)
    SECTIONS=$SECTIONS"$COMMA{'name': '$STEP', 'value':'$result'}"
    COMMA=","
done
SECTIONS=$SECTIONS"],'markdown': true}]"

curl -s -H "Content-Type: application/json" --data "{'Summary':'$2','@type': 'MessageCard','sections':$SECTIONS, 'potentialAction': [{'@type': 'OpenUri', 'name': 'Workflow run on GitHub', 'targets': [{'os': 'default','uri': '$RUN_URL'}] }] }" $WEBHOOK_URL
