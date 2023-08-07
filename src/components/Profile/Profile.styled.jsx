import styled from 'styled-components';

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  width: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  margin-bottom: 40px;
  padding-top: 25px;

  text-align: center;
  
  box-shadow: 0 0 10px #c6cccced;
  border-radius: 5px;
 
`;

export const Description = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  
`;

export const Avatar = styled.img`
  
  height: 150px;
  width: 150px;
  margin: 0 auto;
  padding: 10px;

  border-radius: 50%;
  box-shadow: -3px -3px 7px #ffffff, 3px 3px 5px #ceced1;

  &:hover {
    background: #ecf0f3;
    box-shadow: inset -3px -3px 7px #ffffff, inset 3px 3px 5px #ceced1;
  }
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 30px;
  margin-bottom: 10px;
  color: #524a4d;
  `;

export const Tag = styled.p`
  font-weight: 500;
  font-size: 20px;
  color: #524a4d;
  margin-bottom: 10px;
  `;

export const Location = styled.p`
  font-weight: 700;
  font-size: 20px;
  color: #524a4d;
  margin-bottom: 20px;
  `;

export const StatsList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  margin: auto;
  padding: 0;
  width: inherit;

  background-color: #7e6f7449;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  box-shadow: 0 0 10px #c6cccced;
  &:hover {
    background: #6bacdd;
    box-shadow: inset -3px -3px 7px #65bfdf, inset 3px 3px 5px #5ab1f3;
  }
  `;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;

  padding: 20px 0;

  
`;

export const Label = styled.span`
  font-weight: 700;
  font-size: 20px;
  color: #524a4d8b;
  `;

export const Quantity = styled.span`
  font-weight: 800;
  font-size: 20px;
  color: #524a4d;
  `;