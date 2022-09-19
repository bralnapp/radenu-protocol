import React from 'react'
import Button from 'src/modules/common/components/Button'

const Header = () => {
    return (
        <nav className='fixed z-[999] h-14 bg-white flex items-center w-full md:h-20'>
            <div className="layout-container flex justify-between items-center">
                <div className='capitalize font-medium md:text-xl'>Logo</div>
                <Button href='/exchange' title="get started" primary className="h-8 w-24 md:w-32 md:h-12" />
            </div>
        </nav>
    )
}

export default Header