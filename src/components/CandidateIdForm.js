import React, { Component } from 'react'

class CandidateIdForm extends Component {
  constructor(props) {
    super(props)

  this.state = {
    candidate_id: ''
  }
}

handleChange = (e) => {
  this.setState({
    candidate_id: e.target.value
  }, console.log(e.target.value))
}

handleSubmit = (e) => {
  e.preventDefault()
}

render() {
  return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Candidate ID
        </label><br />
        <input type="text" onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}





}

export default CandidateIdForm;
