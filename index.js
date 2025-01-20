require('dotenv').config()
const express = require('express')  //express object created
const app = express()              //create variable app. app will contain all the function in express
const port = 4000

const githubData = {
  "login": "shivajirp",
  "id": 119122312,
  "node_id": "U_kgDOBxmpiA",
  "avatar_url": "https://avatars.githubusercontent.com/u/119122312?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/shivajirp",
  "html_url": "https://github.com/shivajirp",
  "followers_url": "https://api.github.com/users/shivajirp/followers",
  "following_url": "https://api.github.com/users/shivajirp/following{/other_user}",
  "gists_url": "https://api.github.com/users/shivajirp/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/shivajirp/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/shivajirp/subscriptions",
  "organizations_url": "https://api.github.com/users/shivajirp/orgs",
  "repos_url": "https://api.github.com/users/shivajirp/repos",
  "events_url": "https://api.github.com/users/shivajirp/events{/privacy}",
  "received_events_url": "https://api.github.com/users/shivajirp/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Shivaji Patil",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 25,
  "public_gists": 0,
  "followers": 5,
  "following": 6,
  "created_at": "2022-11-26T15:24:07Z",
  "updated_at": "2025-01-05T06:42:12Z"
}


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/github', (req, res) => {
  res.json(githubData)
})

app.get('/twitter', (req, res) => {
    res.send('shivajiTwitter.com')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

