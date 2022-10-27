import React,{useEffect} from 'react'
import Navbar from '../Pages/Navbar'
import {getMyPlan,deleteMyPlan} from "../../Redux/User/action"
import { useSelector,useDispatch } from 'react-redux'
import { Box,Heading, Flex,Image,Text, Button, Grid } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'


const MyPlan = () => {
const userid=localStorage.getItem("userid")

  const {myplan}=useSelector((state)=>state.UserReducer)
  const dispatch=useDispatch()
  const toast = useToast()


  useEffect(()=>{
    dispatch(getMyPlan(userid))
  },[])

  const handeldeleteplan=(id)=>{
    dispatch(deleteMyPlan(id)).then((res)=>{
      toast({
          title: res,
          status:'success',
          position:"top",
          duration: 3000,
          isClosable: true,
        })
    dispatch(getMyPlan(userid))
    })
  }



  return (
    <>
  <Navbar/>
  <Box>
    <Flex justifyContent="space-around"  my="15px">
      {myplan.length ? <Heading>All {myplan.length} Plans</Heading> : <Heading>You have not purchased any plan</Heading>}
    </Flex>
    {myplan.length ?
      <Grid gap="15px" w="92%" m="auto" gridTemplateColumns={{base:"repeat(1,1fr)",md:"repeat(2,1fr)", lg:"repeat(3,1fr)"}}>
      {myplan && myplan.map((e)=>(
      <Flex direction="column" alignItems="center" justifyContent="center" p="15px" key={e._id} border="1px solid black" borderRadius="15px" lineHeight="30px">
           <Heading mb="20px">{e.title}</Heading>
            <Text >{e.description} </Text>      
            <Text fontWeight={700}>Price: ₹ {e.price}</Text>
            <Button onClick={()=>handeldeleteplan(e._id)}>DELETE</Button>
   
      </Flex>
    ))}
  </Grid> : <Flex justifyContent="center" alignItems="center" w="90%" m="auto">
    <Image borderRadius="15px" src="https://www.pngfind.com/pngs/m/272-2727925_continue-shopping-empty-cart-png-transparent-png.png"/>
  </Flex>
  
  }
      </Box>
    </>
  )
}

export default MyPlan