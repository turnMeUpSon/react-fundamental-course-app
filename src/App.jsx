import React, { useState } from "react";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
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

  return (
    <div className="App">
      <form>
        <input type="text" placeholder="Name of post" />
        <input type="text" placeholder="Description of post" />
        <MyButton>Create post</MyButton>
      </form>
      <PostList posts={posts} title="Posts about crypto" />
    </div>
  );
};

export default App;
