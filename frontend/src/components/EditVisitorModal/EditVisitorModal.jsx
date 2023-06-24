import { useRef } from "react";
import PropTypes from "prop-types";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  AlertDialogHeader,
} from "@chakra-ui/react";
import { EditVisitorForm } from "../EditVisitorForm/EditVisitorForm";

export function EditVisitorModal({
  isOpen,
  onClose,
  getEditFormData,
  editingVisitorId,
}) {
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
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
              Edit Visitor
            </AlertDialogHeader>
            <EditVisitorForm
              getEditFormData={getEditFormData}
              onClose={onClose}
              initialRef={initialRef}
              editingVisitorId={editingVisitorId}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

EditVisitorModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  getEditFormData: PropTypes.func.isRequired,
  editingVisitorId: PropTypes.string,
};
