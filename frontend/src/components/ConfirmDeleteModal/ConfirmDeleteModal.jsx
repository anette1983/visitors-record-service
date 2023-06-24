import { useRef } from "react";
import PropTypes from "prop-types";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { TButton } from "../VisitorsTable/VisitorsTable.styled";
import { RiDeleteBin6Line } from "react-icons/ri";

export function ConfirmDeleteModal({ id, handleDelete }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const cancelRef = useRef();

  return (
    <>
      <TButton>
        <RiDeleteBin6Line size={22} onClick={onOpen} />
      </TButton>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isCentered
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Visitor
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can&apos;t undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                colorScheme="blue"
                onClick={() => {
                  handleDelete(id);
                  onClose();
                }}
                ml={3}
              >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

ConfirmDeleteModal.propTypes = {
  id: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
