import styled from '@emotion/styled';

export const TransactionTablle = styled.table`
  width: 700px;
  margin: 0 auto;
  margin-bottom: 30px;
  border-radius: 10px;
  overflow: hidden;
`;

export const Head = styled.thead`
  text-transform: uppercase;
  background-color: #5190cb;
`;

export const HeadCell = styled.th`
  padding: 10px;
  width: calc(100% / 3);
`;

export const Body = styled.tbody`
  text-transform: capitalize;
`;

export const BodyRow = styled.tr`
  &:nth-of-type(2n + 1) {
    background-color: #ffffff;
  }

  &:nth-of-type(2n) {
    background-color: #eeeeee;
  }
`;

export const BodyCell = styled.td`
  padding: 10px;

  &:nth-of-type(1) {
    padding-left: 80px;
  }

  &:nth-of-type(2),
  &:nth-of-type(3) {
    text-align: center;
  }
`;
