import React from 'react'
import styled from 'styled-components'

const Navbar = props => {
  return (
    <Wrapper>
      <h1>WoW character search</h1>

    </Wrapper>
  )
}

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding: 1rem 0;
  background: cyan;

`

export default Navbar
