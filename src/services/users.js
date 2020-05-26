const URL_BASE = 'https://api-medium.mybluemix.net/'

async function createAccount (userData) {
  const URL = `${URL_BASE}users/signup`
  const options = {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors'
  }
  const response = await window.fetch(URL, options)
  const dataResponse = await response.json()
  return dataResponse
}

async function logIn (data) {
  console.log(data)
  const URL = `${URL_BASE}auth/login`
  const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors'
  }
  const response = await window.fetch(URL, options)
  const dataResponse = await response.json()
  return dataResponse
}

export {
  createAccount,
  logIn
}
