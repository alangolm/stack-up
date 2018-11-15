import React from 'react'

const BenchmarkData = (props) => {
  return (
    <div>
      <h2>
        Coding Percentile: {props.data.candidate_id}
      </h2>
    </div>
  )
}

export default BenchmarkData
