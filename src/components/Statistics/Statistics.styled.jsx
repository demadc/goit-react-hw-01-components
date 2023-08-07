import styled from 'styled-components';

export const Section = styled.section`
 display: flex;
 flex-direction: column;
 align-items: center;

 padding-top: 10px;
 margin: 0 auto;
 width: 360px;

 box-shadow: 0 0 10px #4d6b6bec;
 border-radius: 8px;
`;
  
export const Title = styled.h2`
  
  margin-bottom: 15px;

  text-align: center;
  font-weight: 700;
  font-size: 30px;
  color: #454343; 
`;
export const StatList = styled.ul`
 display: flex;
 flex-direction: row;
 align-items: center;
 
 width: 100%;
 padding: 0;
 margin: 0;
 
 list-style: none;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  padding: 10px;
  width: 100%;
  height: 100%;

  &:hover {
    box-shadow: inset -3px -3px 7px #e4b2b2, inset 3px 3px 5px #7d7dcb;
  }
`;

export const Label = styled.span`
  font-weight: 600;
  font-size: 20px;
  color: #ffffff;
  margin-bottom: 5px;
`;

export const Percentage = styled.span`
  font-weight: 800;
  font-size: 20px;
  color: #ffffff;
`;