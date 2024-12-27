require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const githubData = {
    "login": "sahilkhan09k",
    "id": 181699039,
    "node_id": "U_kgDOCtSB3w",
    "avatar_url": "https://avatars.githubusercontent.com/u/181699039?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/sahilkhan09k",
    "html_url": "https://github.com/sahilkhan09k",
    "followers_url": "https://api.github.com/users/sahilkhan09k/followers",
    "following_url": "https://api.github.com/users/sahilkhan09k/following{/other_user}",
    "gists_url": "https://api.github.com/users/sahilkhan09k/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/sahilkhan09k/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/sahilkhan09k/subscriptions",
    "organizations_url": "https://api.github.com/users/sahilkhan09k/orgs",
    "repos_url": "https://api.github.com/users/sahilkhan09k/repos",
    "events_url": "https://api.github.com/users/sahilkhan09k/events{/privacy}",
    "received_events_url": "https://api.github.com/users/sahilkhan09k/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 6,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2024-09-16T06:39:17Z",
    "updated_at": "2024-12-26T13:12:01Z"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res) => {
    res.send('sahildotcom')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login here</h1>')
})

app.get('/youtube', (req, res) => {
    res.send("Chai Aur code")
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})