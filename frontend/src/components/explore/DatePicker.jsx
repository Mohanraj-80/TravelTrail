import React, { useState } from 'react'

const DatePicker = () => {
    const [date,setDate] = useState()
  return (
    <>
     <div>
        <input type="date" className='input-date' onChange={(e)=>setDate(e.target.value)} />
    </div>
    </>
  )
}

export default DatePicker