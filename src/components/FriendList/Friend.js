import React from "react"
import PropTypes from "prop-types"
import styles from "./FriendList.module.css"

const Friend = ({ avatar, name, isOnline, id }) => {
  const status = isOnline ? styles.online : styles.offline
  return (
    <li className={styles.item} key={id}>
      <span className={status} />
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  )
}

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}

export default Friend
