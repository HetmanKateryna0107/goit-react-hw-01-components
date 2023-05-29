import css from './TransactionHistory.module.css';
import PropTypes from "prop-types";

export const TransactionHistory = ({ items }) => {
  return (
   
      <table className={css.transactionHistory}>
        <thead className='head'>
          <tr>
            <td>Type</td>
            <td>Amount</td>
            <td>Currency</td>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <th>{item.type}</th>
              <th>{item.amount}</th>
              <th>{item.currency}</th>
            </tr>
          ))}
        </tbody>
      </table>
       );
};
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};