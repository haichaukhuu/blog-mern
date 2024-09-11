import { Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import BlogCard from "./components/BlogCard"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import WritePage from "./pages/WritePage"
import ProfilePage from "./pages/ProfilePage"
import React, { useState } from 'react';

import { ChakraProvider } from '@chakra-ui/react'

function App() {
  const [posts, setPosts] = useState([
    {
      title: 'Why are cats so cute?',
      image: 'https://via.placeholder.com/400x200',  // Replace with actual image URL
      author: '@haichaukhuu',
      date: 'Sat Aug 17 2024 18:02:06',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
  ]);

  return (
    <ChakraProvider>
      <NavBar />

      <Routes>
        <Route path="/" element={
          <HomePage>

            {posts.map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}

          </HomePage>
        } />

        <Route exact path="/login" element=<LoginPage/> />
        <Route exact path="/register" element=<RegisterPage/> />
        <Route exact path="/write" element=<WritePage/> />
        <Route exact path="/profile" element=<ProfilePage/> />

      </Routes>
    </ChakraProvider>
  )
}

export default App