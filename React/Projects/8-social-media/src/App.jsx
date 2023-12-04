import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Sidebar from './Components/Sidebar';
import CreatePost from './Components/CreatePost';
import Post from './Components/Post';
import PostList from './Components/PostList';
import { useState } from 'react';
import PostListContextProvider from './Store/post-list-store';
function App() {

  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <>
      <PostListContextProvider>

        <div className="app-container">
          <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Sidebar>
          <div className="header-footer">
            <Header></Header>
            {selectedTab === "Home" ? (
              <PostList></PostList>
            ) :
              (<CreatePost></CreatePost>)}
            <Footer></Footer>
          </div>
        </div>
      </PostListContextProvider>

    </>
  );
}

export default App
