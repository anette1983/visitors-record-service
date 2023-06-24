import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { BaseTable, THead, Th, Tr, Td, TButton } from "./VisitorsTable.styled";
import { RiEdit2Line } from "react-icons/ri";
import { useDisclosure } from "@chakra-ui/react";
import { handleDateFormat } from "../utils/helpers";
import { EditVisitorModal } from "../EditVisitorModal/EditVisitorModal";
import { ConfirmDeleteModal } from "../ConfirmDeleteModal/ConfirmDeleteModal";

export const VisitorsTable = ({ visitors, handleDelete, getEditFormData }) => {
  const [sortedVisitors, setSortedVisitors] = useState([...visitors]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");
  const [editingVisitorId, setEditingVisitorId] = useState(null);

  const handleSort = (columnName) => {
    if (sortColumn === columnName) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(columnName);
      setSortDirection("asc");
    }
  };

  useEffect(() => {
    const sortVisitors = () => {
      const sorted = [...visitors];

      if (sortColumn) {
        sorted.sort((a, b) => {
          const valueA = a[sortColumn];
          const valueB = b[sortColumn];

          return sortDirection === "asc"
            ? valueA.localeCompare(valueB)
            : valueB.localeCompare(valueA);
        });
      }
      setSortedVisitors(sorted);
    };

    sortVisitors();
  }, [visitors, sortColumn, sortDirection]);

  const onEdit = (id) => {
    setEditingVisitorId(id);
    onOpen();
  };

  return (
    <>
      <BaseTable>
        <THead>
          <tr>
            <Th>№</Th>
            <Th onClick={() => handleSort("name")}>NAME</Th>
            <Th onClick={() => handleSort("surname")}>SURNAME</Th>
            <Th onClick={() => handleSort("updatedAt")}>DATE</Th>
            <Th>EDIT</Th>
            <Th>DELETE</Th>
          </tr>
        </THead>

        <tbody>
          {sortedVisitors.map(
            ({ _id: id, name, surname, updatedAt }, index) => {
              return (
                <Tr key={id}>
                  <Td>{index + 1}</Td>
                  <Td>{name}</Td>
                  <Td>{surname}</Td>
                  <Td>{handleDateFormat(updatedAt)}</Td>
                  <Td>
                    <TButton onClick={() => onEdit(id)}>
                      <RiEdit2Line size={22} />
                    </TButton>
                  </Td>
                  <Td>
                    <ConfirmDeleteModal id={id} handleDelete={handleDelete} />
                  </Td>
                </Tr>
              );
            }
          )}
        </tbody>
      </BaseTable>
      <EditVisitorModal
        isOpen={isOpen}
        onClose={onClose}
        getEditFormData={getEditFormData}
        editingVisitorId={editingVisitorId}
      />
    </>
  );
};

VisitorsTable.propTypes = {
  visitors: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      surname: PropTypes.string.isRequired,
      updatedAt: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleDelete: PropTypes.func.isRequired,
  getEditFormData: PropTypes.func.isRequired,
};
