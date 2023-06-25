import { useState } from "react";
import PropTypes from "prop-types";
import { useToast } from "@chakra-ui/react";
import { StyledForm } from "./VisitorForm.styled";
import { ButtonAdd } from "../Button/ButtonAdd.styled";

export const AddVisitorForm = ({ getFormData, onClose, initialRef }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    name === "name" ? setName(value) : setSurname(value);
  };

  const handleSubmit = async (evt) => {
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

    getFormData(visitor);
    toast({
      title: "Success",
      description: "Visitor added successfully!",
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
        <ButtonAdd type="submit">Submit</ButtonAdd>
        <ButtonAdd onClick={onClose}>Cancel</ButtonAdd>
      </div>
    </StyledForm>
  );
};

AddVisitorForm.propTypes = {
  getFormData: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  initialRef: PropTypes.object.isRequired,
};
