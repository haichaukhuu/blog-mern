import React from 'react';
import { Box, Button, Input, Stack, Heading, Text, Flex } from '@chakra-ui/react';
// import { GoogleLogin } from '@react-oauth/google';
import { Link } from 'react-router-dom';

function RegisterPage() {
  return (
    <Flex justify="center" align="center" h="100vh" bg="gray.100">
      <Box p="8" maxW="md" bg="white" borderRadius="md" boxShadow="md">
        <Heading textAlign="center" mb="6">
          Register
        </Heading>

        {/* input fields + buttons */}
        <Stack spacing="4" textAlign="center">
          <Input placeholder="Email" type="email" />
          <Input placeholder="Username" type="text" />
          <Input placeholder="Display name" type="text" />
          <Input placeholder="Password" type="password" />
          <Input placeholder="Confirm Password" type="password" />

          {/* register button */}
          <Button variant="solid" colorScheme="blue">
            {/* <Link to="/login" > */}
              Register
            {/* </Link> */}
          </Button>

        </Stack>

      </Box>
      
    </Flex>
  );
}

export default RegisterPage;