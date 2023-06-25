import styled from "@emotion/styled";

export const BaseTable = styled.table`
  width: 100%;
  margin: 0 auto;
  border-collapse: collapse;

  background-color: ${({ theme }) => theme.colors.white};
  text-align: center;

  box-shadow: ${({ theme }) => theme.shadows.small};

  @media screen and (max-width: 520px) {
    max-width: 480px;
  }
`;

export const THead = styled.thead`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.accent};
  text-transform: uppercase;
`;

export const Td = styled.td`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.dark};
  @media screen and (max-width: 520px) {
    padding: 2px;
  }
`;

export const Th = styled.th`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.white};
  /* cursor: pointer; */
  cursor: ${({ onClick }) => (onClick ? "pointer" : "default")};
  transition: all ${({ theme }) => theme.animation.cubicBezier};
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.accent};
    background-color: ${({ theme }) => theme.colors.accentHover};
  }

  &:nth-of-type(2):active,
  &:nth-of-type(3):active,
  &:nth-of-type(4):active {
    transform: scale(1.2);
  }
  @media screen and (max-width: 520px) {
    padding: 2px;
  }
`;

export const Tr = styled.tr`
  &:nth-of-type(odd) {
    background-color: ${({ theme }) => theme.colors.light};
  }
`;

export const TButton = styled.button`
  color: ${({ theme }) => theme.colors.gray};
  transition: transform ${({ theme }) => theme.animation.cubicBezier};

  &:hover,
  &:focus {
    transform: scale(1.2);
  }
`;
