import React from 'react'
import Select from 'react-select'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

class Fake extends React.Component {
  state = {
    selectedOption: 'chocolate'
  }
  handleChange = selectedOption => {
    this.setState({ selectedOption })
  }
  render () {
    console.log(`Option selected:`, this.state.selectedOption)
    const { selectedOption } = this.state

    return (
      <Select
        defaultValue='vanilla'
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
    )
  }
}
export default Fake
