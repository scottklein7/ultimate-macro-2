import React from 'react'
import '../App.css'

function Assets(props) {
    return (
        <>  
            <article className="assetsArticle">
            <h2>Assets</h2>
                <div className='assetsDiv2'>
                    <ul className='assetsUl'>
                        <span>BTC</span>
                        <li className='assetsLi'>Current: ${props.apiData[0].btc1} Previous Month: ${props.apiData[1].btc2}</li>
                        <span>CRUDE OIL</span> 
                        <li className='assetsLi'>Current: ${props.apiData[2].oil1} Previous Month: ${props.apiData[3].oil2}</li>
                        <span>Regular Gas Per Gallon</span> 
                        <li className='assetsLi'>Current: ${props.apiData[4].gas1} Previous Month: ${props.apiData[5].gas2}</li>
                        <span>GOLD PER OZ</span>
                        <li className='assetsLi'>Current: ${props.apiData[6].gold1} Previous Month: ${props.apiData[7].gold2}</li>
                    </ul>
                </div> 
            </article>
        </>
    )
}

export default Assets
