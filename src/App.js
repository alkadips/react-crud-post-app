import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import PostCreate from "./pages/PostCreate"
import PostEdit from "./pages/PostEdit"
import PostShow from "./pages/PostShow"
import Login from "./pages/Login"
import Registration from "./pages/Registration"
import Postlist from "./pages/PostList"

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signup" element={<Registration />} />
        <Route exact path="/dashboard" element={<Postlist />} />
        <Route path="/create" element={<PostCreate />} />
        <Route path="/edit/:id" element={<PostEdit />} />
        <Route path="/show/:id" element={<PostShow />} />
      </Routes>
    </Router>
  );
}

export default App;