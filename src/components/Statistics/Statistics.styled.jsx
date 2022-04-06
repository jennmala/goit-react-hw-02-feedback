import styled from '@emotion/styled';

export const Wrap = styled.section`
  width: 400px;
  margin: 0 auto;
  margin-bottom: 30px;
  border-radius: 5px;
  overflow: hidden;
`;

export const Title = styled.h2`
  margin: 0;
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: #ffffff;
  color: #555555;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 0;
`;

export const StatList = styled.ul`
  display: flex;
  list-style: none;
  text-align: center;
  margin: 0;
  padding: 0;
`;

export const Stat = styled.li`
  flex-basis: ${props => `calc(100% / ${props.numberOfStats})`};
  padding-top: 15px;
  padding-bottom: 15px;
  background-color: ${() =>
    `#${Math.floor(Math.random() * 16777215).toString(16)}`};
  color: #ffffff;
`;

export const Label = styled.span`
  display: block;
  margin-bottom: 10px;
`;

export const Percentage = styled.span`
  display: block;
  font-size: 20px;
  font-weight: 700;
`;
