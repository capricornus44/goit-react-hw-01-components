import React from "react"
import PropTypes from "prop-types"

import styles from "./Statistics.module.css"

function getRandomColor() {
  const random = function () {
    return Math.floor(Math.random() * 255)
  }
  return "rgb(" + random() + "," + random() + "," + random() + ")"
}

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    <h2 className={styles.title}>{title}</h2>

    <ul className={styles.statList}>
      {stats.map((stat) => (
        <li className={styles.item} key={stat.id} style={{ backgroundColor: getRandomColor() }}>
          <span className={styles.label}>{stat.label}</span>
          <span className={styles.percentage}>{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
)

Statistics.defaultProps = {
  title: "",
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      percentage: PropTypes.number,
      id: PropTypes.string,
    })
  ).isRequired,
}

export default Statistics
