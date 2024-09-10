import React from 'react';
import { Box, Button, Input, Stack, Heading, Text, Flex } from '@chakra-ui/react';
import { GoogleLogin } from '@react-oauth/google';

function LoginPage() {
  return (
    <Flex justify="center" align="center" h="100vh" bg="gray.100">
      <Box p="8" maxW="md" bg="white" borderRadius="md" boxShadow="md">
        <Heading textAlign="center" mb="6">
          Login
        </Heading>

        {/* Input Fields for Email and Password */}
        <Stack spacing="4">
          <Input placeholder="Email" type="email" />
          <Input placeholder="Password" type="password" />
          <Button colorScheme="teal" size="lg" width="100%">
            Login
          </Button>
        </Stack>

        {/* Google Login Button */}
        <Box mt="6" textAlign="center">
          <Text mb="4" fontWeight="bold">OR</Text>
          {/* <GoogleLogin
            onSuccess={handleGoogleLoginSuccess}
            onError={handleGoogleLoginError}
          /> */}
        </Box>
      </Box>
    </Flex>
  );
}

export default LoginPage;