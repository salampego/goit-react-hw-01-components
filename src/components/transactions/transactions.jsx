import s from './transactions.module.css'
import PropTypes from 'prop-types'

export const TransactionHistory = ({ items }) => 
  (
    <table className={s.transactioHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
        </thead>
          <tbody>
        {items.map(({ id, type, amount, currency }) => 
  
          <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  )}</tbody>
        </table>
)

TransactionHistory.prototype = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
}