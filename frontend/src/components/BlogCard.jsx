import { Box, Text, Image, Link, Stack, Flex } from '@chakra-ui/react';

function BlogCard({ title, image, author, date, description }) {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" my="5" p="4">
      <Flex direction={{ base: 'column', md: 'row' }}>
        {/* Blog Image */}
        <Image
          src={image}
          alt={title}
          objectFit="cover"
          width={{ base: '100%', md: '200px' }} // Adjust width for responsive design
          height="auto"
          borderRadius="md"
        />

        {/* Blog Text Content */}
        <Box flex="1" ml={{ base: 0, md: 6 }} mt={{ base: 4, md: 0 }}>
          <Stack spacing="3">
            {/* Title */}
            <Text fontWeight="bold" fontSize="lg">
              {title}
            </Text>

            {/* Author and Date */}
            <Flex justifyContent="space-between" fontSize="sm" color="gray.500">
              <Text>{author}</Text>
              <Text>{date}</Text>
            </Flex>

            {/* Description */}
            <Text noOfLines={2} fontSize="md">
              {description}
            </Text>

            {/* Read More Link */}
            <Link color="teal.500">Read more</Link>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
}

export default BlogCard;
