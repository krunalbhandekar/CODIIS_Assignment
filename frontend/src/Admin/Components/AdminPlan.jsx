import React,{useEffect} from 'react'
import Navbar from '../Pages/Navbar'
import {getAllPlan,deleteplan} from "../../Redux/Admin/action"
import { useSelector,useDispatch } from 'react-redux'
import { Box,Heading, Flex,Image,Text, Button, Grid } from '@chakra-ui/react'
import CreatePlan from './CreatePlan'
import { useToast } from '@chakra-ui/react'
import EditPlan from './EditPlan'



const AdminPlan = () => {
    const {allPlan}=useSelector((state)=>state.AdminReducer)
  const dispatch=useDispatch()
  const token=localStorage.getItem("token")
  const toast = useToast()


   useEffect(()=>{
    dispatch(getAllPlan())
  },[])

 
  const handeldelete=(id)=>{
    dispatch(deleteplan(id,token)).then((res)=>{
      toast({
          title: res,
          status: 'success',
          position:"top",
          duration: 3000,
          isClosable: true,
        })
    dispatch(getAllPlan())
    })
  }

  return (
    <>
     <Box>
    <Flex justifyContent="space-around"  my="15px">
      <Heading>All {allPlan.length} Plans</Heading>
      <CreatePlan/>
    </Flex>
      <Grid gap="15px" w="92%" m="auto" gridTemplateColumns={{base:"repeat(1,1fr)",md:"repeat(2,1fr)", lg:"repeat(3,1fr)"}}>
      {allPlan && allPlan.map((e)=>(
      <Flex direction="column" alignItems="center" justifyContent="center" p="15px" key={e._id} border="1px solid black" borderRadius="15px" lineHeight="30px">
           <Heading mb="20px">{e.title}</Heading>
            <Text >{e.description} </Text>      
            <Text fontWeight={700}>Price: ₹ {e.price}</Text>
            <Flex gap="10px" mt="10px">
            <EditPlan e={e}/>
            <Button onClick={()=>handeldelete(e._id)}>DELETE</Button>
            </Flex>
   
      </Flex>
    ))}
  </Grid> 
      </Box>
    </>
  )
}

export default AdminPlan