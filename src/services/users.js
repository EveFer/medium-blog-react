const URL_BASE = 'https://api-medium.mybluemix.net/'

function createAccount (userData) {
  const URL = `${URL_BASE}users/signup`
  const options = {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors'
  }
  return window.fetch(URL, options)
}

function logIn (data) {
  const URL = `${URL_BASE}auth/login`
  const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors'
  }
  return window.fetch(URL, options)
}

export {
  createAccount,
  logIn
}
