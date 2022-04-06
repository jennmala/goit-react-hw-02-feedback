import styled from '@emotion/styled';

export const ProfileWrap = styled.div`
  width: 400px;
  margin: 0 auto;
  margin-bottom: 30px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const Description = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: #ffffff;
  text-align: center;
`;

export const Avatar = styled.img`
  display: block;
  width: 150px;
  border: solid #dddddd 1px;
  border-radius: 50%;
  margin: 0 auto;
`;

export const Name = styled.p`
  margin-top: 40px;
  font-size: 25px;
  color: #2a2a2a;
  font-weight: 700;
`;

export const Tag = styled.p`
  color: #999999;
  font-size: 20px;
`;

export const Location = styled.p`
  color: #999999;
  font-size: 20px;
`;

export const Stats = styled.ul`
  display: flex;
  list-style: none;
  text-align: center;
  margin: 0;
  padding: 0;
`;

export const StatsItem = styled.li`
  flex-basis: calc(100% / 3);
  padding-top: 25px;
  padding-bottom: 25px;
  background-color: #f3f3f3;
  border-top: solid #d6d6d6 1px;

  &:not(:last-child) {
    border-right: solid #d6d6d6 1px;
  }
`;

export const Label = styled.span`
  display: block;
  color: #999999;
  margin-bottom: 10px;
`;

export const Quantity = styled.span`
  display: block;
  font-size: 20px;
  color: #2a2a2a;
  font-weight: 700;
`;
