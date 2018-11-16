import React, { Component } from 'react'
import Papa from 'papaparse'

class CandidateIdForm extends Component {
  constructor(props) {
    super(props)

  this.state = {
    candidate_id: '',
    scoreRecords: [],
    companies: [],
    submitted: false
  }
}

componentDidMount() {
  Papa.parse('https://s3.amazonaws.com/simple-fractal-recruiting/score-records.csv', {
    download: true,
    header: true,
    dynamicTyping: true,
    complete: (results) => {
      // console.log("Finished:", results.data);
      this.setState({
        scoreRecords: results.data
      })
    }
  })
  Papa.parse('https://s3.amazonaws.com/simple-fractal-recruiting/companies.csv', {
    download: true,
    header: true,
    dynamicTyping: true,
    complete: (results) => {
      // console.log("Finished:", results.data);
      this.setState({
        companies: results.data
      })
    }
  })
}

handleChange = (e) => {
  this.setState({
    candidate_id: e.target.value
  }, console.log(e.target.value))
}

handleSubmit = (e) => {
  e.preventDefault();
  this.setState({
    submitted: !this.state.submitted
  })
}

calculateCandidatePercentile(id) {
  console.log(this.state.scoreRecords.find(el => this.state.candidate_id === el.candidate_id))
}

refreshPage() {
  window.location.reload();
}

render() {
  console.log("this is score records", this.state.scoreRecords)
  // console.log("this is companies", this.state.companies)
  return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Candidate ID
        </label><br />
        <input type="text" onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>

      <div>
        {this.state.submitted ?
          <div>
            <h2>Coding Percentile: {this.state.candidate_id}</h2>
            <button onClick={this.refreshPage}>
              Refresh
            </button>
          </div>
           : null}
      </div>
    </div>
  )
}

}

export default CandidateIdForm;
