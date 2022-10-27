import React,{useEffect} from 'react'
import Navbar from '../Pages/Navbar'
import {getAllVideo} from "../../Redux/User/action"
import { useSelector,useDispatch } from 'react-redux'
import { Box,Heading, Flex,Image,Text, Button, Grid } from '@chakra-ui/react'
import ReactPlayer from 'react-player'

const AllVideo = () => {
  const {allvideo}=useSelector((state)=>state.UserReducer)
  const dispatch=useDispatch()

   useEffect(()=>{
    dispatch(getAllVideo())
  },[])

  return (
    <>
    <Navbar/>
     <Box>
    <Flex justifyContent="space-around"  my="15px">
      <Heading>All {allvideo.length} Videos</Heading>
    </Flex>
      <Grid gap="15px" w="92%" m="auto" gridTemplateColumns={{base:"repeat(1,1fr)",md:"repeat(2,1fr)", lg:"repeat(3,1fr)"}}>
      {allvideo && allvideo.map((e)=>(
      <Flex direction="column" alignItems="center" justifyContent="center" p="15px" key={e._id} border="1px solid black" borderRadius="15px" lineHeight="30px">
           
            <Text >{e.description} </Text>   
            <ReactPlayer width="100%" height="240px" controls url={e.video}
            /> 
           
   
      </Flex>
    ))}
  </Grid> 
      </Box>
    </>
  )
}

export default AllVideo