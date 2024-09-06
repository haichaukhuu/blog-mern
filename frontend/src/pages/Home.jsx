import { Box, Container } from '@chakra-ui/react';

function Home({ children }) {
  return (
    <Box as="main" py={8}>
      <Container maxW="container.md" px={4}>
        {children}
      </Container>
    </Box>
  );
}

export default Home;