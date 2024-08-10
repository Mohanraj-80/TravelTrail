import React from 'react'
import City from './City'
import Transport from './Transport'
import DatePicker from './DatePicker'
import Hotel from './Hotel'

const Explore = () => {
  return (
    <>
      <div className='explore-bg d-flex flex-row justify-content-center bg-padding'>
        <form className='plan-inputs'>
            <h1 class="text-center">Start Your Plan</h1>
            <City />
            <div className='d-flex flex-row'>
                <div className="form-group d-flex flex-column mr-5">
                    <label htmlFor="">From</label>
                    <DatePicker />
                </div>
                <div className="form-group d-flex flex-column">
                  <label htmlFor="">To</label>
                  <DatePicker />
                </div>
                <Transport />
            </div>
          <Hotel />
          <button className='btn submit-btn mb-4'>Submit</button>
        </form>
      </div>
    </>
  )
}

export default Explore