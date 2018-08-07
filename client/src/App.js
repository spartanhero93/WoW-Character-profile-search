import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Select from 'react-select'
import Navbar from './components/Navbar'
import UserProfile from './components/UserProfile'
import NoImg from './images/noImage.jpg'

const options = [
  { value: 'avatar', label: 'Thumbnail' },
  { value: 'main', label: 'Full' },
  { value: 'inset', label: 'Half' }
]

class App extends Component {
  state = {
    term: 'axiosjs',
    user: {},
    userId: '',
    userPic: '',
    selectedOption: {
      value: 'avatar',
      label: 'Thumbnail'
    }
  }

  componentDidMount () {
    this.handleSearch()
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
      <Wrapper>

        <Navbar />
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
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  text-align: center;
`

const SearchInputs = styled.div`
  display: flex;
  justify-content: center;
  & > * {
    width: 40%;
  }

`

export default App
