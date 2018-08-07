import React, { Component } from 'react'
import styled from 'styled-components'
import NoImg from '../images/noImage.jpg'

class UserProfile extends Component {
  render () {
    return (
      <User>
        <User_Hero>
          <img src={this.props.userPic} alt='user pic' />

          <div className='user info'>
            <h5>Name</h5>
            <h3>{this.props.user.name}</h3>
            <h5>What server are you on?</h5>
            <h3>{this.props.user.realm}</h3>
          </div>
        </User_Hero>

        <User_Buttons>
          <button>Add to Friends</button><button>Check full profile</button>
        </User_Buttons>

        <div className='user summary'>
          <h4>
            <span>User </span>
            {this.props.user.name}
            ,<span> level</span>
            {this.props.user.level}
            , <span>gender </span>
            {this.props.user.gender === 0
              ? <span>Male </span>
              : <span>Female </span>}
            has achieved {this.props.user.totalHonorableKills} Honorable kills

          </h4>
        </div>
      </User>
    )
  }
}

const User = styled.div`
border: red solid 3px;
  img {
   height: 8rem;
   border-radius: 10rem;
  }
`
const User_Hero = styled.div`
 background: linear-gradient(to bottom, rgba(0,0,0,0.65) 0%,rgba(0,0,0,0) 100%)
`
const User_Buttons = styled.div`
  button:nth-child(1) {
    background: #0C35CA;
    color: #FFCB00;
  }
`
export default UserProfile
