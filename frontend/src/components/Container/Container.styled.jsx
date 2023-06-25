import styled from "@emotion/styled";

export const Container = styled.div`
  max-width: 1200px;

  padding-left: ${(props) => props.theme.spacing(5)};
  padding-right: ${(props) => props.theme.spacing(5)};

  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 520px) {
    padding-left: ${(props) => props.theme.spacing(2)};
    padding-right: ${(props) => props.theme.spacing(2)};
  }
`;
