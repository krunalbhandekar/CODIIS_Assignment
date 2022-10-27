import React from 'react'
import { useState } from "react";
import {Flex,Heading,Input,Button,InputGroup,Stack,InputLeftElement,chakra,Box,Link,Avatar,FormControl,FormHelperText,InputRightElement,Select} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react'

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Register = () => {
 const [showPassword, setShowPassword] = useState(false);
 const [form, setform] = useState({})
 const navigate=useNavigate()
   const toast = useToast()

  const handleShowClick = () => setShowPassword(!showPassword);
  const handlechange=(e)=>{
    let {name,value}=e.target
    setform({...form, [name]:value})
  }
  const handelregister=(e)=>{
    e.preventDefault()

const config = {
  method: 'post',
  url: 'http://localhost:8080/user/register',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : JSON.stringify(form)
};

axios(config)
.then(function (response) {
  if(response.data.message == 'User Register Successful'){
    toast({
          title: response.data.description,
          description: response.data.message,
          status: 'success',
          position:"top",
          duration: 3000,
          isClosable: true,
        })
    navigate("/")
  }
  else if(response.data.message === "Registration failed"){
    toast({
          title: response.data.description,
          description: response.data.message,
          status: 'error',
          position:"top",
          duration: 3000,
          isClosable: true,
        })
  }
  
})
.catch(function (error) {
  console.log(error); 
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
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input type="text" placeholder="email" name="email"  onChange={handlechange}/>
                </InputGroup>
              </FormControl>
              <FormControl>
                <Select placeholder='isAdmin' name="isAdmin" onChange={handlechange}>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </Select>
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
                onClick={handelregister}
              >
                Register
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        Already register?{" "}
        <Link color="teal.500" href="/">
          Login
        </Link>
      </Box>
    </Flex>
  );
}

export default Register