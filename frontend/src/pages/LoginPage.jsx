import React from 'react';
import { Box, Button, Input, Stack, Heading, Text, Flex } from '@chakra-ui/react';
// import { GoogleLogin } from '@react-oauth/google';
import { Link } from 'react-router-dom';


function LoginPage() {
  return (
    <Flex justify="center" align="center" h="100vh" bg="gray.100">
      <Box p="8" maxW="md" bg="white" borderRadius="md" boxShadow="md">
        <Heading textAlign="center" mb="6">
          Login
        </Heading>

        {/* input fields + buttons */}
        <Stack spacing="4" textAlign="center">
          <Input placeholder="Email" type="email" />
          <Input placeholder="Password" type="password" />

          {/* login button */}
          <Button variant="solid" colorScheme="blue">
            {/* <Link to="/login" > */}
              Login
            {/* </Link> */}
          </Button>
          
          {/* register section */}
          <Text mb="4" fontWeight="bold">Don't have account?</Text>
          <Button variant="outline" colorScheme="blue">
            <Link to="/register" >
              Register here!
            </Link>
          </Button>
        </Stack>

      </Box>

    </Flex>
  );
}

export default LoginPage;