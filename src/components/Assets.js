import React from 'react'
import '../App.css'

function Assets({ btc1, btc2, oil1, oil2, gas1, gas2, gold1, gold2 }) {
    return (
        <>  
            <article className="assetsArticle">
            <h2>Assets</h2>
                <div className='assetsDiv2'>
                    <ul className='assetsUl'>
                        <li className='assetsLi'>Current: ${btc1} Previous Month: ${btc2}</li>
                        <li className='assetsLi'>Current: ${oil1} Previous Month: ${oil2}</li>
                        <li className='assetsLi'>Current: ${gas1} Previous Month: ${gas2}</li>
                        <li className='assetsLi'>Current: ${gold1} Previous Month: ${gold2}</li>
                    </ul>
                </div> 
            </article>
        </>
    )
}

export default Assets
