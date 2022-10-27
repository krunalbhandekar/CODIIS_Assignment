import React,{useState} from 'react'
import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,Button,ModalCloseButton,Box,Text, Heading,Input, Select,} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { useDispatch } from "react-redux";
import { useToast } from '@chakra-ui/react'
import {addplan,getAllPlan} from "../../Redux/Admin/action"

const CreatePlan = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
    const dispatch = useDispatch();
  const toast = useToast()
  const [form, setform] = useState({})
  const token=localStorage.getItem("token")

  const onchange=(e)=>{
    let {name,value}=e.target
    setform({...form,[name]:value})
  }
  const handleadd=(e)=>{
    e.preventDefault()
    dispatch(addplan(form,token)).then((res)=>{
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
    <Button onClick={onOpen} colorScheme='teal' variant='outline'>Add New Plan</Button>

      <Modal isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />
        <ModalContent p="10px">
          <ModalHeader>CODIIS</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
           <Box>
            <Heading>Add New Plan</Heading>
            <form>
              <Box mt="10px">
                <label>Title</label>
                <Input type="text" name="title" placeholder='Ex: Monthly, Quaterly, Yearly' onChange={onchange}/>
              </Box>

              <Box mt="10px">
                <label>Description</label>
          <Input
            name="description"
            type="text"
            placeholder="Description" onChange={onchange}/>
              </Box>

              <Box mt="10px">
          <label>Price</label>
          <Input
            name="price"
            type="number"
            placeholder="Price" onChange={onchange}/>
        </Box>
         
        <Button mt="10px" onClick={handleadd}> 
          ADD
        </Button>

            </form>
           </Box>
          
          </ModalBody>

        </ModalContent>
      </Modal>
    </>
  )
}

export default CreatePlan