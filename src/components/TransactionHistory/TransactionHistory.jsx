import PropTypes from 'prop-types';
import {Table, Thead, HeadItem, Tbody, BodyItem, Tr} from './TransactionHistory.styled'

export const TransactionHistory = (items) => {
    return (

 <Table >
    <Thead>
        <Tr>
        <HeadItem>Type</HeadItem>
        <HeadItem>Amount</HeadItem>
        <HeadItem>Currency</HeadItem>
        </Tr>
    </Thead>

    <Tbody>
        {items.map(item => (
        <Tr key={item.id}>
        <BodyItem>{item.type}</BodyItem>
        <BodyItem>{item.amount}</BodyItem>
        <BodyItem>{item.currency}</BodyItem>
        </Tr>
    ))}
    </Tbody>
</Table> 

  );
};


TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
      })).isRequired,
}


 
