const URL_BASE = "https://api-medium.mybluemix.net/";


function GetPost (id) {
  console.log("GET POSTS!!!!!")
  console.log(id)
  const URL = `${URL_BASE}posts/${id}`;
  const options = {
    method: 'GET',
    //body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlYzg5YzQ5NTc1ZWZiMDA3ZTEzYTFmMiIsImlhdCI6MTU5MDQ3OTEyNn0.cMio3JpKCcuu5VPviyY5Ccs-e0L1QVVm6qXk0_o9Oc8"
    },
    mode: 'cors'
  }
  return window.fetch(URL, options)
}


function GetPosts () {
  const URL_BASE = "https://api-medium.mybluemix.net/";
  console.log("GET POSTS")
  const URL = `${URL_BASE}posts`
  const options = {
    method: 'GET',
    //body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlYzg5YzQ5NTc1ZWZiMDA3ZTEzYTFmMiIsImlhdCI6MTU5MDQ3OTEyNn0.cMio3JpKCcuu5VPviyY5Ccs-e0L1QVVm6qXk0_o9Oc8"
    },
    mode: 'cors'
  }
  return window.fetch(URL, options)
}



export { GetPosts, GetPost };