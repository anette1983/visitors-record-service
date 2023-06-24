import styled from "@emotion/styled";

export const StyledForm = styled.form`
  color: ${({ theme }) => theme.colors.dark};
  & input {
    border: 1px solid ${({ theme }) => theme.colors.gray};
    padding: 8px;
    font-family: inherit;
  }

  & label {
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;
  }
  & div {
    display: flex;

    & button {
      display: inline-block;
      border-radius: 0.375 rem;
    }
  }
`;
