import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import BlogCard from "./components/BlogCard";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import WritePage from "./pages/WritePage";
import ProfilePage from "./pages/ProfilePage";
import PostPage from "./pages/PostPage"; // Import the PostPage component
import React, { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  const [posts, setPosts] = useState([
    {
      id: '1',
      title: 'Why are cats so cute?',
      image: 'https://via.placeholder.com/400x200',  // Replace with actual image URL
      author: '@haichaukhuu',
      date: 'Sat Aug 17 2024 18:02:06',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      content: 'Full content of why cats are cute. You can add more content here.',
    },
    // Add more posts here as needed
  ]);

  return (
    <ChakraProvider>
      <NavBar />

      <Routes>
        {/* Homepage Route */}
        <Route
          path="/"
          element={
            <HomePage>
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />  /* Ensure post is passed correctly */
              ))}
            </HomePage>
          }
        />
        {/* PostPage Route */}
        <Route path="/post/:postId" element={<PostPage posts={posts} />} /> {/* Pass posts data */}

        {/* Other Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
