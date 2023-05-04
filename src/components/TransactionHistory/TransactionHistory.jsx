import PropTypes from 'prop-types';
import {
  TransactionTable,
  TableHaeder,
  TableHaed,
  TableBody,
  TableRow,
  TableData,
} from 'components/TransactionHistory/TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <TableHaed>
        <TableRow>
          <TableHaeder>Type</TableHaeder>
          <TableHaeder>Amount</TableHaeder>
          <TableHaeder>Currency</TableHaeder>
        </TableRow>
      </TableHaed>

      <TableBody>
        {items.map(({ id, type, amount, currency }) => (
          <TableRow key={id}>
            <TableData>{type}</TableData>
            <TableData>{amount}</TableData>
            <TableData>{currency}</TableData>
          </TableRow>
        ))}
      </TableBody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
