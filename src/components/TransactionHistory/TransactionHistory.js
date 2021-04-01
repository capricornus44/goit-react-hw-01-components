import React from "react"
import PropTypes from "prop-types"

import styles from "./TransactionHistory.module.css"

const TransactionHistory = ({ items }) => (
  <table className={styles.transactionHistory}>
    <thead className={styles.thead}>
      <tr>
        <th className={styles.th}>Type</th>
        <th className={styles.th}>Amount</th>
        <th className={styles.th}>Currency</th>
      </tr>
    </thead>

    <tbody className={styles.tbody}>
      {items.map((item) => (
        <tr className={styles.tr} key={item.id}>
          <td className={styles.td}>{item.type}</td>
          <td className={styles.td}>{item.amount}</td>
          <td className={styles.td}>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
)

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
      id: PropTypes.string,
    })
  ).isRequired,
}

export default TransactionHistory
