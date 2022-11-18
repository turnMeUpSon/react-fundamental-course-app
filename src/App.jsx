import React, { useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import MySelect from "./components/UI/select/MySelect";
import "./styles/App.css";

const App = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Bitcoin",
      body: "Bitcoin is a decentralized cryptocurrency originally described in a 2008 whitepaper by a person, or group of people, using the alias Satoshi Nakamoto",
    },
    {
      id: 2,
      title: "Ethereum",
      body: "Ethereum is a decentralized open-source blockchain system that features its own cryptocurrency",
    },
    {
      id: 3,
      title: "USDT",
      body: "USDT is a stablecoin (stable-value cryptocurrency) that mirrors the price of the U.S. dollar, issued by a Hong Kong-based company Tether.",
    },
  ]);

  const [selectedSort, setSelectedSort] = useState("");

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sort) => {
    selectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15 px 0" }} />
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Sorting"
          options={[
            { value: "title", name: "By name" },
            { value: "body", name: "By description" },
          ]}
        />
      </div>
      {posts.length ? (
        <PostList
          remove={removePost}
          posts={posts}
          title="Posts about crypto"
        />
      ) : (
        <h1 style={{ textAlign: "center" }}>Posts weren't found</h1>
      )}
    </div>
  );
};

export default App;
