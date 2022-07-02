import s from './transactions.module.css'

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
  
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  )}</tbody>
        </table>
)