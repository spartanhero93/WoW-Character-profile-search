import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Select from 'react-select'
import logo from './logo.svg'
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
    selectedOption: null
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

      this.setState({
        user: user.data,
        userPic: `http://render-us.worldofwarcraft.com/character/${user.data.thumbnail}`
      })
      console.log(user)
    } catch (error) {
      console.log(error)
    }
  }

  handleImageSelect = selectedOption => {
    this.setState({ selectedOption })
    console.log(`Option selected:`, selectedOption)
  }

  render () {
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
        <input
          name='characterName'
          value={this.state.term}
          onChange={this.handleInput}
        />
        <Select
          value={selectedOption}
          onChange={this.handleImageSelect}
          options={options}
        />
        <button onClick={this.handleSearch}>Test Server</button>

        <User>
          <h3>UserName: {this.state.user.name}</h3>
          <img src={this.state.userPic} alt='user pic' />
        </User>
      </div>
    )
  }
}

const User = styled.div`
  margin: 2rem 8rem;
`

export default App
