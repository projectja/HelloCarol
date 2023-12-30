import React from 'react'

export default function Card({empresa}) {
    console.log(empresa)
  return (    
    <div>
        <p>
             {empresa[0].author}


        </p>
    </div>
  )
}
