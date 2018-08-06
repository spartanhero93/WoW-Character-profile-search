import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Select from 'react-select'
import logo from './logo.svg'
import UserProfile from './components/UserProfile'
import NoImg from './images/noImage.jpg'

import './App.css'

const options = [
  { value: 'avatar', label: 'Thumbnail' },
  { value: 'main', label: 'Full' },
  { value: 'inset', label: 'Half' }
]

class App extends Component {
  state = {
    term: '',
    user: {},
    userId: '',
    userPic: '',
    selectedOption: {
      value: 'avatar',
      label: 'Thumbnail'
    }
  }

  handleInput = event => {
    this.setState({
      term: event.target.value
    })
  }

  handleSearch = async () => {
    console.log(this.state.term)
    try {
      const response = await axios.post('/api/getData', {
        characterName: this.state.term
      })
      const user = await response.data
      const thumbnail = await user.data.thumbnail
      const newChoice = await thumbnail.replace(
        /avatar/i,
        this.state.selectedOption.value
      )

      this.setState({
        user: user.data,
        userPic: `http://render-us.worldofwarcraft.com/character/${newChoice}`
      })
    } catch (error) {
      this.setState({ user: undefined, userPic: NoImg })
    }
  }

  handleImageSelect = selectedOption => {
    this.setState({ selectedOption })
  }

  render () {
    console.log(this.state.user)
    const { selectedOption } = this.state
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <p className='App-intro'>
          {this.state.term}
        </p>
        <SearchInputs>
          <input
            name='characterName'
            value={this.state.term}
            onChange={this.handleInput}
          />
          <Select
            defaultValue='avatar'
            value={selectedOption}
            onChange={this.handleImageSelect}
            options={options}
          />
        </SearchInputs>

        <button onClick={this.handleSearch}>Test Server</button>

        <UserProfile user={this.state.user} userPic={this.state.userPic} />
      </div>
    )
  }
}

const SearchInputs = styled.div`
  display: flex;
  justify-content: center;

  & > * {
    width: 20%;
  }
`

export default App
