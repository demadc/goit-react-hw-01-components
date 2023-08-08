import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  
  padding: 20px;
  width: 320px;
  margin-bottom: 10px;
  
  border-radius: 8px;
  box-shadow: 0 0 10px #5a6464ec;
  
`;

export const Status = styled.span`
  width: 30px;
  height: 30px;

  margin-right: 20px;
  
  border-radius: 50%;
  background-color: ${props => (props.isOnline  ? 'green' : 'red')}
`;

export const Avatar = styled.img`
  width: 70px;
  margin-right: 10px;
`;

export const Name = styled.p`
  margin-bottom: 15px;  

  font-weight: 700;
  font-size: 30px;
  color: #524a4d;
`;