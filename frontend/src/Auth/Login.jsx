import React from 'react'
import { useState } from "react";
import {Flex,Heading,Input,Button,InputGroup,Stack,InputLeftElement,chakra,Box,Link,Avatar,FormControl,FormHelperText,InputRightElement} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react'

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Login = () => {
 const [showPassword, setShowPassword] = useState(false);
 const [form, setform] = useState({})
 const navigate=useNavigate()
   const toast = useToast()

  const handleShowClick = () => setShowPassword(!showPassword);
  const handlechange=(e)=>{
    let {name,value}=e.target
    setform({...form, [name]:value})
  }
  const handellogin=(e)=>{
    e.preventDefault()

const config = {
  method: 'post',
  url: 'http://localhost:8080/user/login',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : JSON.stringify(form)
};

axios(config)
.then( (response) =>{
 localStorage.setItem("isAdmin",response.data.isAdmin)
 localStorage.setItem("userid",response.data._id)

  if(response.data.message === "Login Succesfull"){
    toast({
          title: response.data.description,
          description: response.data.message,
          status: 'success',
          position:"top",
          duration: 3000,
          isClosable: true,
        })
        navigate(response.data.isAdmin ? "/admin" :"/user")
  }
})
.catch(function (error) {
  toast({
          title: "Login Failed",
          description: "Please try again...",
          status: 'error',
          position:"top",
          duration: 3000,
          isClosable: true,
        })
});
  }

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="teal.500" />
        <Heading color="teal.400">Welcome</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input type="text" placeholder="username" name="username"  onChange={handlechange}/>
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password" onChange={handlechange}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                </FormHelperText>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
                onClick={handellogin}
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        New to us?{" "}
        <Link color="teal.500" href="/register">
          Sign Up
        </Link>
      </Box>
    </Flex>
  );
}

export default Login