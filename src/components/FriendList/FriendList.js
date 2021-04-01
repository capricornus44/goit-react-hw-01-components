import React from "react"
import PropTypes from "prop-types"
import Friend from "./Friend"

import styles from "./FriendList.module.css"

const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map((friend) => (
      <Friend key={friend.id} name={friend.name} avatar={friend.avatar} isOnline={friend.isOnline} />
    ))}
  </ul>
)

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    })
  ).isRequired,
}

export default FriendList
