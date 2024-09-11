import React from 'react';
import { Box, Text, Image, Stack, Heading } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

function PostPage({ posts }) {
  const { postId } = useParams();

  // Find the post by id from the posts array
  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return <Text>Post not found</Text>;
  }

  return (
    <Box p="8" maxW="3xl" mx="auto">
      <Image src={post.image} alt={post.title} borderRadius="md" />
      <Stack spacing="4" mt="6">
        <Heading>{post.title}</Heading>
        <Text fontSize="sm" color="gray.500">{post.author} - {post.date}</Text>
        <Text>{post.content}</Text>  {/* Show full post content */}
      </Stack>
    </Box>
  );
}

export default PostPage;
