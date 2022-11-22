import React from 'react'
import { ImcResult, ImcTable, Header } from '../components'

export const ImcPage = () => {
  return (
      <>
        <Header />
        <div className='body-content'>
          <ImcResult />
          <ImcTable />
        </div>
      </>
    )
}
