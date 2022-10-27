import React,{useState} from 'react'
import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,Button,ModalCloseButton,Box,Text, Heading,Input, Select,} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { useDispatch } from "react-redux";
import { useToast } from '@chakra-ui/react'
import {getAllPlan,updateplan} from "../../Redux/Admin/action"

const EditPlan = ({e}) => {
    const id=e._id
    const { isOpen, onOpen, onClose } = useDisclosure()
    const dispatch = useDispatch();
  const toast = useToast()
  const [form, setform] = useState({})
  const token=localStorage.getItem("token")

  const onchange=(e)=>{
    let {name,value}=e.target
    setform({...form,[name]:value})
  }
  const handeledit=(e)=>{
    e.preventDefault()
    dispatch(updateplan(id,form,token)).then((res)=>{
        toast({
          title: res,
          status: 'success',
          position:"top",
          duration: 3000,
          isClosable: true,
        })
        onClose()
        dispatch(getAllPlan())
    })
  }
  return (
    <>
         <Button onClick={onOpen} colorScheme='teal' variant='outline'>Edit</Button>

      <Modal isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />
        <ModalContent p="10px">
          <ModalHeader>CODIIS</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
           <Box>
            <Heading>Edit Plan</Heading>
            <form>
              <Box mt="10px">
                <label>Title</label>
                <Input type="text" defaultValue={e.title} name="title" placeholder='Ex: Monthly, Quaterly, Yearly' onChange={onchange}/>
              </Box>

              <Box mt="10px">
                <label>Description</label>
          <Input
            name="description"
            type="text"
            placeholder="Description" defaultValue={e.description} onChange={onchange}/>
              </Box>

              <Box mt="10px">
          <label>Price</label>
          <Input
            name="price"
            type="number"
            placeholder="Price" defaultValue={e.price} onChange={onchange}/>
        </Box>
         
        <Button mt="10px" onClick={handeledit}> 
          Edit
        </Button>

            </form>
           </Box>
          
          </ModalBody>

        </ModalContent>
      </Modal>
    </>
  )
}

export default EditPlan