import React from 'react'
import SearchInp from './SearchInp.jsx'
import Conversations from './Conversations.jsx'
import Logout from './Logout.jsx'

const Sidebar = () => {
  return (
    <>
    <div className='border-r border-slate-500 p-4 flex flex-col'>
    <SearchInp/>
    <div className='divided px-3'></div>
    <Conversations/>
    <Logout/>
    </div>
    </>
  )
}

export default Sidebar
