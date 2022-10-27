import React from 'react'
import {Box,Flex,Avatar,HStack,IconButton,Button,Menu,MenuButton,MenuList,MenuItem,MenuDivider,
  useDisclosure,useColorModeValue,Stack,} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import {Link } from "react-router-dom";

const Navbar = () => {
 const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} bgColor="black" color="white">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Link to="/admin"> <Box>CODIIS</Box></Link>
           
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              <Link to="/admin/video">Videos</Link>
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://cdn-icons-png.flaticon.com/512/149/149071.png'
                  }
                />
              </MenuButton>
            </Menu>
          </Flex>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              <Link to="/admin/video">Videos</Link>
            </Stack>
          </Box>
        ) : null}
      </Box>

    </>
  )
}

export default Navbar