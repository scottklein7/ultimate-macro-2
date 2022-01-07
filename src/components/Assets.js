import React from 'react'
import '../App.css'

function Assets(props) {
    const { btc1, btc2, oil1, oil2, gas1, gas2, gold1, gold2 } = props
    return (
        <>  
            <article className="assetsArticle">
            <h2>Assets</h2>
                <div className='assetsDiv2'>
                    <ul className='assetsUl'>
                        <span>BTC</span>
                        <li className='assetsLi'>Current: ${btc1} Previous Month: ${btc2}</li>
                        <span>CRUDE OIL</span> 
                        <li className='assetsLi'>Current: ${oil1} Previous Month: ${oil2}</li>
                        <span>Regular Gas Per Gallon</span> 
                        <li className='assetsLi'>Current: ${gas1} Previous Month: ${gas2}</li>
                        <span>GOLD PER OZ</span>
                        <li className='assetsLi'>Current: ${gold1} Previous Month: ${gold2}</li>
                    </ul>
                </div> 
            </article>
        </>
    )
}

export default Assets
