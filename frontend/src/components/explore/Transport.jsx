import React, { useState } from 'react'

const Transport = () => {
    const [mode,setMode] = useState()
  return (
    <>
    <div className='ml-5 mt-1'>
        <p>Mode of Transport:</p>
        <div className="transport d-flex flex-row">
            <div className="form-group justify-content-center align-items-center">
                <input type="radio" className='mr-1' value="train" name='transport' href="train" onChange={(e)=>setMode(e.target.value)} />< label htmlFor="train">Train</label>
            </div>
            <div className="form-group ml-2">
                <input type="radio" className='ml-2 mr-1'  value="car" href="car" name='transport' onChange={(e)=>setMode(e.target.value)} /> <label htmlFor="car">Car</label>
            </div>
            <div className="form-group ml-2">
                <input type="radio" className='ml-2 mr-1'  value="flight" href="flight" name='transport' onChange={(e)=>(e.target.value)} /> <label htmlFor="flight">Flight</label>
            </div>
        </div>
    </div>
    </>
  )
}

export default Transport