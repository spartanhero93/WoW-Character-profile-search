import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  state = {
    term: '',
    data: {}
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
      const data = await response.data
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  render () {
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
        <button onClick={this.handleSearch}>Test Server</button>
      </div>
    )
  }
}

export default App
