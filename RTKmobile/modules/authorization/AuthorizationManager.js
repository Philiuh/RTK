import * as API from '../../API'

export const loginRequest = ({ loginValue, passwordValue }) => 
   fetch(API.LOGIN, {
    method: 'POST',
    body: JSON.stringify({
      username: loginValue,
      password: passwordValue,
    }),
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then(response => response.json())
    .catch(() => 401)

