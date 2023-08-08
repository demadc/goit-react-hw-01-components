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
  text-shadow: .0625rem .0625rem .0625rem #4b3caf;
`;

export const Tbody = styled.tbody`
  font-weight: 400;
  font-size: 15px;
  color: white;
    
  background-color: #5555d8;
`;


export const BodyItem = styled.td`
  width: 100%;
  padding: 10px;
  
  font-weight: 700;
  font-size: 15px;
  color: #524a4d;
  
`;
