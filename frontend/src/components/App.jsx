import { useEffect, useState } from "react";
import { useToast } from "@chakra-ui/react";
import {
  Container,
  Section,
  Heading,
  VisitorsTable,
  LoadingHeading,
} from "../components/";
import { AddVisitorModal } from "./AddVisitorModal/AddVisitorModal";
import {
  addUser,
  fetchAllUsers,
  deleteUser,
  editUser,
} from "../../services/api";
import { StyledSpinner } from "../components";

const App = () => {
  const [visitors, setVisitors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const toast = useToast();

  const getAllVisitors = async () => {
    setIsLoading(true);
    try {
      const result = await fetchAllUsers();

      setVisitors(result.data.result);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllVisitors();
  }, []);

  const handleDelete = async (id) => {
    setIsLoading(true);
    try {
      await deleteUser(id);
      getAllVisitors();
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getAddFormData = async (data) => {
    setIsLoading(true);
    try {
      await addUser(data);
      getAllVisitors();
    } catch (error) {
      setError(error);
      toast({
        title: "Error",
        description: `${error.message}`,
        status: "success",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getEditFormData = async (id, data) => {
    setIsLoading(true);
    try {
      await editUser(id, data);
      getAllVisitors();
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Section>
        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Visitors List
        </Heading>
        <AddVisitorModal getAddFormData={getAddFormData} />
        <VisitorsTable
          visitors={visitors}
          handleDelete={handleDelete}
          getEditFormData={getEditFormData}
        />
        {isLoading && (
          <>
            <StyledSpinner size="lg" emptyColor="gray.200" color="blue.500" />
            <LoadingHeading
              marginTop="50px"
              marginBottom="50px"
              textAlign="center"
            >
              Database is loading... Please wait!
            </LoadingHeading>
          </>
        )}
        {error && (
          <Heading marginTop="50px" marginBottom="50px" textAlign="center">
            Something went wrong :( Try again later!
          </Heading>
        )}
      </Section>
    </Container>
  );
};

export default App;
