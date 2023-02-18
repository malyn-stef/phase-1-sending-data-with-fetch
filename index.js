function submitData(userName, userEmail) {
  const newUser = {
    name: userName,
    email: userEmail
  }
  const configData = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "accept": "application/json",
    },
    body: JSON.stringify(newUser)
  }
  return fetch("http://localhost:3000/users", configData)
    .then(res => res.json())
    .then(function (jsonString) {
      document.body.append(jsonString.id)
    })
    .catch(function (error) {
      document.body.append(error.message)
    })


}

submitData()
