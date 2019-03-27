import * as React from "react";
import { render } from "react-dom";
import axios from "axios";

import "./styles.scss";

async function fetchPosts() {
  const result = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return result.data;
}

function PostRenderer(post) {
  return (
    <div className="post">
      <div className="post__title">{post.title}</div>
      <div className="post__body">{post.body}</div>
      <div className="post__footer">{post.id}</div>
    </div>
  );
}

function App() {
  const [count, setCount] = React.useState(0);
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    fetchPosts().then(posts => {
      setPosts(posts);
      setCount(posts.length);
    });
  }, []);

  return (
    <div className="App">
      <h2>Posts: {count}</h2>
      <div className="posts">{posts.map(PostRenderer)}</div>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
