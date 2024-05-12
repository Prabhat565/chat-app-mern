import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

const Sidebar = () => {
    return (
        <div className={`sidebar lg:w-fit md:w-[280px] lg:h-[600px] md:h-[600px] h-[88vh] border-r border-slate-500 p-4 flex flex-col`}>
            <SearchInput />
            <div className='divider px-3'></div>
            <Conversations />
            <LogoutButton />
        </div>
    )
}

export default Sidebar
