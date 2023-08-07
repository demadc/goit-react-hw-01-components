import PropTypes from "prop-types";
import { Section, Title, StatList, Item, Label, Percentage } from './Statistics.styled';
import {randomColor} from '../utils/Randomcolor'

export const Statistics = ({ title, stats }) => {
    return (
      <Section >
        {title && <Title >{title}</Title>}
        <StatList >
          {stats.map(stat => (
            <Item key={stat.id} style={{ backgroundColor: randomColor() }}>
              <Label >{stat.label}</Label>
              <Percentage >{stat.percentage}%</Percentage>
            </Item>
          ))}
        </StatList>
      </Section>
    );
  };
  
  Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
          label: PropTypes.string.isRequired,
          percentage: PropTypes.string.isRequired
        })).isRequired,
  };