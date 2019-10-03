import * as API from '../../API'

export const podcastRequest = () =>
  fetch(API.API.PODCASTS, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      'Authorization':
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJwYXNzd29yZCI6InRlc3QiLCJpYXQiOjE1Njk5MjAzMzF9.sqQ9HQvDsCLtCqBU8B4xLIFyQeyNh92gLUX25HZnm_s',
    },
  }).then(response => response.json())
