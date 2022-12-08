import React from 'react'
import Drawer from '../Drawer/Drawer'
import Page from '../Page/Page'

const InnerLayout = () => {
  return (
    <div style={{backgroundColor: "green"}}>
        <Drawer/>
        <Page/>
    </div>
  )
}

export default InnerLayout