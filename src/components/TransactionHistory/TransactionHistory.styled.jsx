import styled from 'styled-components';

export const Table = styled.table`
  box-shadow: 0 0 10px #c6cccced;
  width: 800px;
  border-spacing: 0;
  margin-left:auto;
  margin-right:auto;
  margin-bottom: 40px;
`;

export const Thead = styled.thead`
   background-color: #00bcd4;
    color: white;
    font-weight: 600;
    font-size: 15px;
`;

export const Tr = styled.tr`
  :hover {
   background-color: rgb(115, 120, 175);
-webkit-box-shadow: 0 6px 6px -6px #0E1119;
     -moz-box-shadow: 0 6px 6px -6px #0E1119;
          box-shadow: 0 6px 6px -6px #0E1119;
           color: #ffffff;
    text-shadow: .0625rem .0625rem .0625rem #400075;
  }
`;

export const Th = styled.th`
padding: 10px;
`;

export const Tbody = styled.tb`
 background-color: tomato;
`;

export const Item = styled.td`
  padding: 10px;
  width: inherit;
  font-weight: 700;
  font-size: 15px;
  color: #524a4d;
  justify-content: center;
`;