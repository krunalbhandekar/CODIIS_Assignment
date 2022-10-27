import React,{useEffect} from 'react'
import Navbar from '../Pages/Navbar'
import {getAllVideo,deletevideo} from "../../Redux/Admin/action"
import { useSelector,useDispatch } from 'react-redux'
import { Box,Heading, Flex,Image,Text, Button, Grid } from '@chakra-ui/react'
import ReactPlayer from 'react-player'
import CreateVideo from './CreateVideo'
import { useToast } from '@chakra-ui/react'
import EditVideo from './EditVideo'


const AdminVideo = () => {
    const {allvideo}=useSelector((state)=>state.AdminReducer)
  const dispatch=useDispatch()
  const token=localStorage.getItem("token")
  const toast = useToast()


   useEffect(()=>{
    dispatch(getAllVideo())
  },[])

 
  const handeldelete=(id)=>{
    dispatch(deletevideo(id,token)).then((res)=>{
       toast({
          title: res,
          status: 'success',
          position:"top",
          duration: 3000,
          isClosable: true,
        })
    dispatch(getAllVideo())
    })
   
  }

  return (
    <>
      <Navbar/>
      <Box>
    <Flex justifyContent="space-around"  my="15px">
      <Heading>All {allvideo.length} Videos</Heading>
      <CreateVideo/>
    </Flex>
      <Grid gap="15px" w="92%" m="auto" gridTemplateColumns={{base:"repeat(1,1fr)",md:"repeat(2,1fr)", lg:"repeat(3,1fr)"}}>
      {allvideo && allvideo.map((e)=>(
      <Flex direction="column" alignItems="center" justifyContent="center" p="15px" key={e._id} border="1px solid black" borderRadius="15px" lineHeight="50px">
           
            <Text >{e.description} </Text>   
            <ReactPlayer width="100%" height="240px" controls url={e.video}
            /> 
           <Flex gap="10px" mt="20px">
           <EditVideo e={e}/>
            <Button onClick={()=>handeldelete(e._id)}>DELETE</Button>
            </Flex>
      </Flex>
    ))}
  </Grid> 
      </Box>
      </>
  )
}

export default AdminVideo