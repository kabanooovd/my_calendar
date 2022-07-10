import styled from "styled-components";

interface IFlex {
  direction?: "row" | "column";
  justify?:
    | "center"
    | "space-around"
    | "space-between"
    | "flex-start"
    | "flex-end";
  align?:
    | "center"
    | "space-around"
    | "space-between"
    | "flex-start"
    | "flex-end";
  Border?: string;
  Width?: string;
}

export const Flex = styled.div<IFlex>`
  display: flex;
  position: absolute;
  top: 76px;
  flex-direction: ${({ direction }) => direction || "row"};
  width: ${({ Width }) => Width || "auto"};
  justify-content: ${({ justify }) => justify || "start"};
  align-items: ${({ align }) => align || "start"};
  border: ${({ Border }) => Border || "none"};
`;
