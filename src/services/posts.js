const URL_BASE = 'https://api-medium.mybluemix.net/'

function GetPost (id, token) {
  console.log('GET POSTS!!!!!')
  console.log(id)
  const URL = `${URL_BASE}posts/${id}`
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    },
    mode: 'cors'
  }
  return window.fetch(URL, options)
}

function GetPosts (token) {
  const URL_BASE = 'https://api-medium.mybluemix.net/'
  console.log('GET POSTS')
  const URL = `${URL_BASE}posts`
  const options = {
    method: 'GET',
    // body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    },
    mode: 'cors'
  }
  return window.fetch(URL, options)
}

function createPost (dataPost, token) {
  const URL = `${URL_BASE}posts`
  const options = {
    method: 'POST',
    body: JSON.stringify(dataPost),
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    },
    mode: 'cors'
  }
  return window.fetch(URL, options)
}

export { GetPosts, GetPost, createPost }
