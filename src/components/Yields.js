import React from 'react'
import '../App.css'

function Yields(props) {
    const { tbond1, tbond2, aaaBond1, aaaBond2 } = props
    return (
        <>
            <article className="yieldArticle">
            <h2>Yields</h2>
                <div className='yieldDiv2'>
                    <ul className='yieldUl'>
                        <span>Ten Year Treasury</span>
                        <li className='yieldLi'>Current: {tbond1}% Previous Month: {tbond2}%</li>
                        <span>AAA Corp Bond Index</span>
                        <li className='yieldLi'>Current: {aaaBond1}% Previous Month: {aaaBond2}%</li>
                    </ul>
                </div> 
            </article>
        </>
    )
}

export default Yields
