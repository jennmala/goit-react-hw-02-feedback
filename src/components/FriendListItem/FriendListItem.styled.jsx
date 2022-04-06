import styled from '@emotion/styled';

export const Friend = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  overflow: hidden;
  background-color: #ffffff;
  border-radius: 3px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Status = styled.span`
  display: block;
  margin-right: 20px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => {
    switch (isOnline) {
      case true:
        return '#74b72e';
      case false:
        return '#ff0000';
      default:
        return '#ffffff';
    }
  }};
`;

export const Avatar = styled.img`
  display: block;
  width: 48px;
  margin-right: 20px;
  border-radius: 10px;
  overflow: hidden;
`;

export const Name = styled.p`
  font-size: 20px;
  color: #555555;
`;
