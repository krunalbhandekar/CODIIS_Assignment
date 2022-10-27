import React,{useEffect} from 'react'
import {getAllPlan,buyplan} from "../../Redux/User/action"
import { useSelector,useDispatch } from 'react-redux'
import { Box,Heading, Flex,Image,Text, Button, Grid } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'

const AllPlan = () => {
  const {allPlan}=useSelector((state)=>state.UserReducer)
  const dispatch=useDispatch()
  const userid=localStorage.getItem("userid")
  const toast = useToast()



  useEffect(()=>{
    dispatch(getAllPlan())
  },[])

  const handelbuyplan=(e)=>{
    const payload={userid,title:e.title,description:e.description,price:e.price,planid:e._id}
    dispatch(buyplan(payload)).then((res)=>{
      toast({
          title: res.message,
          status:res.message == "You have already purchased this plan" ? "error" : 'success',
          position:"top",
          duration: 3000,
          isClosable: true,
        })
    })
  }

  return (
     <Box>
    <Flex justifyContent="space-around"  my="15px">
      <Heading>All {allPlan.length} Plans</Heading>
    </Flex>
      <Grid gap="15px" w="92%" m="auto" gridTemplateColumns={{base:"repeat(1,1fr)",md:"repeat(2,1fr)", lg:"repeat(3,1fr)"}}>
      {allPlan && allPlan.map((e)=>(
      <Flex direction="column" alignItems="center" justifyContent="center" p="15px" key={e._id} border="1px solid black" borderRadius="15px" lineHeight="30px">
           <Heading mb="20px">{e.title}</Heading>
            <Text >{e.description} </Text>      
            <Text fontWeight={700}>Price: ₹ {e.price}</Text>
            <Button onClick={()=>handelbuyplan(e)}>BUY</Button>
   
      </Flex>
    ))}
  </Grid> 
      </Box>
  )
}

export default AllPlan