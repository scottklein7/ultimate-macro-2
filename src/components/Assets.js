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
                        <li className='assetsLi'><span className='insideLiSpan1'> <b>Current</b>: ${props.apiData[0].btc1}</span> <b>Previous Month:</b> ${props.apiData[1].btc2}</li>

                        <span>CRUDE OIL</span>
                        <li className='assetsLi'><span className='insideLiSpan1'> <b>Current</b>: ${props.apiData[2].oil1}</span> <b>Previous Month:</b> ${props.apiData[3].oil2}</li>

                        <span>Regular Gas Per Gallon</span>
                        <li className='assetsLi'><span className='insideLiSpan1'> <b>Current</b>: ${props.apiData[4].gas1}</span> <b>Previous Month:</b> ${props.apiData[5].gas2}</li>

                        <span>GOLD PER OZ</span>
                        <li className='assetsLi'><span className='insideLiSpan1'> <b>Current</b>: ${props.apiData[6].gold1}</span> <b>Previous Month:</b> ${props.apiData[7].gold2}</li>
                    </ul>
                </div>
            </article>
        </>
    )
}

export default Assets
