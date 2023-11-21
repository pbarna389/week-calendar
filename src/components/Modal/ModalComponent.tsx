import { FC } from "react"

import { Form } from ".."

import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button } from "@chakra-ui/react"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  text: string
}

export const ModalComponent:FC<ModalProps> = ({ isOpen, onClose, text }) => {
  return (
    <>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} isCentered >
        <ModalOverlay />
        <ModalContent display="flex" alignItems="center" justifyContent="center">
          <ModalHeader>Add todo for this day: {text}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Form onClose={onClose} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose} margin="0">
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
