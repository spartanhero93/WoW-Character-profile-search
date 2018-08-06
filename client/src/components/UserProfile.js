import React, { Component } from 'react'
import styled from 'styled-components'
import NoImg from '../images/noImage.jpg'

class UserProfile extends Component {
  render () {
    return (
      <User>
        <h3>{this.props.user.name}</h3>
        <h4>
          Honorable kills
          {this.props.user.totalHonorablekills > 0
            ? this.props.user.totalHonorablekills
            : <span> 0</span>}
        </h4>
        <h5>Level {this.props.user.level}</h5>
        <h5>
          Gender:
          {this.props.user.gender === 0
            ? <span>Male</span>
            : <span>Female</span>}
        </h5>
        <img src={this.props.userPic} alt='user pic' />
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
      </User>
    )
  }
}

const User = styled.div`
  margin: 2rem 8rem;

  img {
   height: 20rem;
  }
`
export default UserProfile
