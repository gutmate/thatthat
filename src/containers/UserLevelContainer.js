import React from 'react'
import { Link } from 'react-router-dom'
import { UserLevel } from 'components'

const link = {
  as: Link,
  to: '/registering',
}

const UserLevelContainer = () => (
  <UserLevel link={link} />
)

export default UserLevelContainer
