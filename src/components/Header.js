import React, { useState, useEffect } from 'react'


function Header() {
    const [show, setShow] = useState(false)

    function transitionBar() {
        window.scrollY > 100 ? setShow(true) : setShow(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionBar)
        return () => window.removeEventListener('scroll', transitionBar)
    }, [])


    return (
        <div className='divHeader'>
            <h1 className='macroh1'>Ultimate Macro Dashboard</h1>
        </div>
    )
}

export default Header
