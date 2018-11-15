import React, { Component } from 'react'
// import BenchmarkData from './BenchmarkData'
import Papa from 'papaparse'

class CandidateIdForm extends Component {
  constructor(props) {
    super(props)

  this.state = {
    candidate_id: '',
    data: [],
    submitted: false
  }
}

componentDidMount() {
  Papa.parse("https://s3.amazonaws.com/simple-fractal-recruiting/score-records.csv", {
    download: true,
    header: true,
    dynamicTyping: true,
    complete: function(results) {
      console.log("Finished:", results.data);
      // this.setState({
      //   ...this.state.data,
      //   data: results.data
      // })
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
  // return <BenchmarkData data={this.state.candidate_id} />
  this.setState({
    submitted: !this.state.submitted
  })
}

render() {
  // console.log(this.state.data)
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
        {this.state.submitted ? <h2>Coding Percentile: {this.state.candidate_id}</h2> : null}
      </div>
    </div>
  )
}





}

export default CandidateIdForm;
