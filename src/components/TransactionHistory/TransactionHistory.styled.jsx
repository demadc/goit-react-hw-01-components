import styled from "styled-components";


export const Table = styled.table`
  
  width: 800px;
  margin-left:auto;
  margin-right:auto;
  margin-bottom: 40px;

  border-spacing: 0;
  box-shadow: 0 0 10px #c6cccced;
`;

export const Thead = styled.thead`
  font-weight: 600;
  font-size: 20px;
  color: white;
   
  background-color: #00bcd4;
`;

export const HeadItem = styled.th`
  padding: 10px;
  
`;

export const Tr = styled.tr`
  color: #080808;
  text-align: center;
`;

export const Tbody = styled.tbody`
  font-weight: 400;
  font-size: 15px;
  color: white;
    
  background-color: #ceced8;
`;


export const BodyItem = styled.td`
  width: inherit;
  padding: 10px;
  
  font-weight: 700;
  font-size: 15px;
  color: #524a4d;
  
`;
