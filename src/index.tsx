import * as React from "react";
import { render } from "react-dom";
import axios from "axios";

import "bulma/css/bulma.css";
import "./styles.scss";

async function fetchPosts() {
  const result = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return result.data;
}

function PostRenderer(post) {
  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">{post.title}</p>
      </header>
      <div className="card-content">
        <div className="content">{post.body}</div>
      </div>
      <footer className="card-footer">
        <div className="card-footer-item">{post.id}</div>
      </footer>
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
