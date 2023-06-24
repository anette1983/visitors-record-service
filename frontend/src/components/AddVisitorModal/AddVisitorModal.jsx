import * as React from "react";
import PropTypes from "prop-types";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  AlertDialogHeader,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { ButtonAdd } from "../Button/ButtonAdd.styled";
import { AddVisitorForm } from "../AddVisitorForm/AddVisitorForm";

export function AddVisitorModal({ getAddFormData }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <ButtonAdd onClick={onOpen}>Add visitor</ButtonAdd>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <AlertDialogHeader
              fontSize="lg"
              fontWeight="bold"
              textAlign={"center"}
            >
              Add Visitor
            </AlertDialogHeader>
            <AddVisitorForm
              getFormData={getAddFormData}
              onClose={onClose}
              initialRef={initialRef}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

AddVisitorModal.propTypes = {
  getAddFormData: PropTypes.func.isRequired,
};
