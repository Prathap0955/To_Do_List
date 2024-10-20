import React from 'react'
import './landingPage.css'
import { Input } from 'antd'

const LandingPage = () => {
  return (
    <div className='landing-page-body'>
      <div className='input-body'>
      <h3>The ultimate sidekick to your goals</h3>
      <Input
      placeholder='start your day'
      variant='outlined'
      />
      </div>
    </div>
  )
}

export default LandingPage