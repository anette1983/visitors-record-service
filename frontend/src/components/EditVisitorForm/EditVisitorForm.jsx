import { useState } from "react";
import PropTypes from "prop-types";
import { useToast } from "@chakra-ui/react";
import { StyledForm } from "../AddVisitorForm/VisitorForm.styled";
import { ButtonAdd } from "../Button/ButtonAdd.styled";

export const EditVisitorForm = ({
  getEditFormData,
  onClose,
  initialRef,
  editingVisitorId,
}) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    name === "name" ? setName(value) : setSurname(value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!name.trim() || !surname.trim()) {
      return toast({
        title: "Error",
        description: "Fill in all the fields!",
        status: "error",
      });
    }
    const visitor = {
      name,
      surname,
    };
    getEditFormData(editingVisitorId, visitor);
    toast({
      title: "Success",
      description: "Visitor updated successfully!",
      status: "info",
    });
    reset();
    onClose();
  };

  const reset = () => {
    setName("");
    setSurname("");
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <label>
        Name
        <input
          onChange={handleChange}
          type="text"
          name="name"
          value={name}
          ref={initialRef}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
      </label>
      <label>
        Surname
        <input
          onChange={handleChange}
          type="text"
          name="surname"
          value={surname}
          title="Surname may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
      </label>
      <div>
        <ButtonAdd colorScheme="blue" type="submit">
          Update
        </ButtonAdd>
        <ButtonAdd colorScheme="blue" onClick={onClose}>
          Cancel
        </ButtonAdd>
      </div>
    </StyledForm>
  );
};

EditVisitorForm.propTypes = {
  getEditFormData: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  initialRef: PropTypes.object.isRequired,
  editingVisitorId: PropTypes.string,
};
