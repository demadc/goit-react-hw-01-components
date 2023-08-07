import PropTypes from 'prop-types';
import { Table, Thead, Tr, Th, Tbody, Item } from './TransactionHistory.styled';
// id, type, amount, currency

export const TransactionHistory = ({items}) => {
    return (
<Table>
  <Thead>
    <Tr>
      <Th>Type</Th>
      <Th>Currency</Th>
      <Th>Amount</Th>
    </Tr>
  </Thead>

  <Tbody>
    { items.map (item => {
        return (
    <Tr key={item.id}>
        <Item>{item.amount}</Item>
        <Item>{item.type}</Item>
        <Item>{item.currency}</Item>   
    </Tr> 
    )})}
    
  </Tbody>
</Table>
    )
}


TransactionHistory.PropTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired
    })).isRequired
}

