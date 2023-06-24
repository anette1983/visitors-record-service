import styled from "@emotion/styled";
import { Button } from "@chakra-ui/react";

export const ButtonAdd = styled(Button)`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.accent};
  text-transform: uppercase;
  text-align: center;
  padding: 10px;
  font-weight: bold;
  display: block;
  margin: 15px auto;
  transition: color ${({ theme }) => theme.animation.cubicBezier},
    background-color ${({ theme }) => theme.animation.cubicBezier},
    transform ${({ theme }) => theme.animation.cubicBezier};

  box-shadow: ${({ theme }) => theme.shadows.small};
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.accent};
    background-color: ${({ theme }) => theme.colors.white};
  }
  &:active {
    transform: scale(1.2);
  }
`;
