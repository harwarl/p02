import React from 'react'

const Content = ({data}) => {
  return (
    <main>
        <ul style={{listStyleType: "revert"}}>
            {data.map((val)=>(
                <li key={val.id}>{JSON.stringify(val)}</li>
            ))}
        </ul>
    </main>
  )
}

export default Content