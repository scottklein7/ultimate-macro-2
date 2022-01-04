import React from 'react'

function Yields({ tbond1, tbond2, aaaBond1, aaaBond2 }) {
    return (
        <>
            <article className="yieldArticle">
                <div className='yieldDiv'>
                    <ul className='yieldUl'>
                        <li className='yieldLi'>Current: {tbond1}% Previous Month: {tbond2}%</li>
                        <li className='yieldLi'>Current: {aaaBond1}% Previous Month: {aaaBond2}%</li>
                    </ul>
                </div> 
            </article>
        </>
    )
}

export default Yields
