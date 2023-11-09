# notify-teams

Send a notification to your Teams channels Incoming Webhook connector.

## Usage

> **_NOTE:_** All steps included in the job need to have the parameter "id" set to be included in the list of results in the notification.

Example:

```yaml
jobs:
  my-job:
    runs-on: ubuntu-latest
    steps:
      ...
      - name: Notify in Teams on failure
        uses: lkp-rnd/actions/notify-teams@main
        id: notify-teams
        if: ${{ failure() && github.ref == 'refs/heads/main' }}
        with:
          webhook_url: ${{ secrets.TEAMS_WEBHOOK_URL_BUILD_STATUS }}
          summary: 'Sorry, your job ${{ github.job }} failed'
          notification_summary: '${{ github.job }} failed!'
          github: ${{ toJson(github) }}
          steps: ${{ toJson(steps) }}
```

### Parameters

| Parameter            | Type   | Required | Description                       |
| -------------------- | ------ | -------- | --------------------------------- |
| webhook_url          | string | Yes      | The webhook url                   |
| summary              | string | Yes      | Header of notification card       |
| notification_summary | string | Yes      | Summary seen in notification      |
| github               | json   | No       | The github context in JSON-format |
| steps                | json   | No       | The Github steps so far (JSON)    |
