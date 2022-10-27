import React,{useState} from 'react'
import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,Button,ModalCloseButton,Box,Text, Heading,Input, Select,} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { useDispatch } from "react-redux";
import { useToast } from '@chakra-ui/react'
import {getAllVideo,updatevideo} from "../../Redux/Admin/action"

const EditVideo = ({e}) => {
  const id=e._id
  const { isOpen, onOpen, onClose } = useDisclosure()
  const dispatch = useDispatch();
  const toast = useToast()
  const [form, setform] = useState({})
  const token=localStorage.getItem("token")

    const onchange=(e)=>{
    let {type,files,name,value}=e.target
    if(type=="file"){
        setform({...form,[name]:files[0]})

    }else{
        setform({...form,[name]:value})
    }
  }
   const handeledit=(e)=>{
    e.preventDefault()
    console.log(form);
    dispatch(updatevideo(id,form,token)).then((res)=>{
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
    <Button onClick={onOpen} colorScheme='teal' variant='outline'>Edit</Button>

      <Modal isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />
        <ModalContent p="10px">
          <ModalHeader>CODIIS</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
           <Box>
            <Heading>Edit Video</Heading>
            <form>
              <Box mt="10px">
                <label>Description</label>
                <Input type="text" defaultValue={e.description} name="description" placeholder='Description' onChange={onchange}/>
              </Box>

              <Box mt="10px">
                <label>Video</label>
          <Input
            name="video"
            type="file"
             onChange={onchange}/>
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

export default EditVideo