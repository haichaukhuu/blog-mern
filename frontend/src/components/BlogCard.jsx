import React from 'react';
import { Box, Text, Image, Link, Stack, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function BlogCard({ post }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/post/${post.id}`);  // Navigate to the correct post by ID
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" my="5" p="4" onClick={handleClick} cursor="pointer">
      <Flex direction={{ base: 'column', md: 'row' }}>
        <Image
            src={post.image}
            alt={post.title}
            objectFit="cover"
            width={{ base: '100%', md: '200px' }} // adjust width for responsive 
            height="auto"
            borderRadius="md"
        />

        <Box flex="1" ml={{ base: 0, md: 6 }} mt={{ base: 4, md: 0 }}>
          <Stack spacing="3">
            <Text fontWeight="bold" fontSize="lg" isTruncated>
              {post.title}
            </Text>
            
            {/* <Text fontSize="sm" color="gray.500">{post.author} - {post.date}</Text> */}
            <Flex justifyContent="space-between" fontSize="sm" color="gray.500">
              <Text>{post.author}</Text>
              <Text>{post.date}</Text>
            </Flex>

            <Text noOfLines={2} fontSize="md">
                {post.description}
            </Text>

            <Link color="teal.500" onClick={handleClick}>
              Read more
            </Link>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
}

export default BlogCard;
