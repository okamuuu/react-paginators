[![Build Status](https://travis-ci.org/okamuuu/react-paginators.svg?branch=master)](https://travis-ci.org/okamuuu/react-paginators)

# react-paginators

Basic paginator component for React. This component is designed to be used with the header links.

## DEMO

![react-paginagors example](https://cloud.githubusercontent.com/assets/123702/23536492/993b16c4-0008-11e7-81c4-f3d1b9be6840.gif)

## Usage

```
create-react-app react-paginators-example && cd $_
npm install --save axios parse-link-header react-paginators
```

create `src/Posts.js`

```javascript
import React, { Component } from 'react'
import axios from 'axios'
import parse from 'parse-link-header'
import { Bootstrap3ishPaginator } from 'react-paginators'

const BASE_URL = "https://jsonplaceholder.typicode.com"

function getPosts(page = 1) {
  return axios.get(`${BASE_URL}/posts?_page=${page}`).then((res) => {
    return {
      "posts": res.data || [],
      "links": parse(res.headers.link)
    }
  }).catch(e => { throw e })
}

export default class Posts extends Component {

  componentWillMount() {
    getPosts(1).then(result => {
      this.setState({posts: result.posts, current: 1, last: result.links.last._page})
    })
  }

  handleClick(page) {
    getPosts(page).then(result => {
       this.setState({posts: result.posts, current: page, last: result.links.last._page})
    })
  }

  render() {
    const posts = this.state && this.state.posts || []
    const current = this.state && this.state.current || 1
    const last = this.state && parseInt(this.state.last, 10) || 1

    return (
      <div>
        <div style={{display: "flex", justifyContent: "center" }}>
          <Bootstrap3ishPaginator
            current={current}
            last={last}
            maxPageCount={10}
            onClick={this.handleClick.bind(this)}
          />
        </div>
        <ul style={{listStyleType:"none"}}>
        {posts.map(post => (
          <li id={post.id}>{post.title}</li>
        ))}
        </ul>
      </div>
    )
  }
}
```

edit `src/App.js`

```javascript
 import './App.css';
+import Posts from './Posts'
 
 class App extends Component {
   render() {
@@ -13,6 +14,7 @@ class App extends Component {
         <p className="App-intro">
           To get started, edit <code>src/App.js</code> and save to reload.
         </p>
+        <Posts />
       </div>
     );
   }
```

And run it

```
npm start
```
