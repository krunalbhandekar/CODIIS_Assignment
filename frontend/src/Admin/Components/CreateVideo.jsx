import React,{useState} from 'react'
import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,Button,ModalCloseButton,Box,Text, Heading,Input, Select,} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { useDispatch } from "react-redux";
import { useToast } from '@chakra-ui/react'
import {addvideo,getAllVideo} from "../../Redux/Admin/action"

const CreateVideo = () => {
      const { isOpen, onOpen, onClose } = useDisclosure()
    const dispatch = useDispatch();
  const toast = useToast()
  const [form, setform] = useState({})
  const token=localStorage.getItem("token")

  const onchange=(e)=>{
    let {type,name,value,files}=e.target
    if(type=="file"){
        setform({...form,[name]:files[0]})
    }else{
        setform({...form,[name]:value})
    }
  }

   const handleadd=(e)=>{
    e.preventDefault()
    dispatch(addvideo(form,token)).then((res)=>{
      toast({
          title: res,
          status: 'success',
          position:"top",
          duration: 3000,
          isClosable: true,
        })
        onClose()
        dispatch(getAllVideo())
    })
  }

  return (
   <>
   <Button onClick={onOpen} colorScheme='teal' variant='outline'>Add New Video</Button>

      <Modal isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />
        <ModalContent p="10px">
          <ModalHeader>CODIIS</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
           <Box>
            <Heading>Add New Video</Heading>
            <form>
              <Box mt="10px">
                <label>Description</label>
                <Input type="text" name="description" placeholder='Description' onChange={onchange}/>
              </Box>

              <Box mt="10px">
                <label>Video</label>
          <Input
            name="video"
            type="file"
            placeholder="Video" onChange={onchange}/>
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

export default CreateVideo