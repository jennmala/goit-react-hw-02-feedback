import styled from "@emotion/styled";

export const ButtonList = styled.div`
  display: flex;
`;

export const Button = styled.button`
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  box-shadow: 1px 2px 3px grey;
  text-transform: uppercase;
  font-weight: 700;
  color: #848078;

  background-color: ${({ name }) => {
    switch (name) {
      case "good":
        return "#7cf979";
      case "neutral":
        return "#ecf979";
      case "bad":
        return "#f99779";
      default:
        return "grey";
    }
  }};

  &:not(:last-child) {
    margin-right: 20px;
  }
`;
