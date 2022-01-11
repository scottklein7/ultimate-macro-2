import React from 'react'
import '../App.css'

function Assets(props) {
    return (
        <>
            <article className="assetsArticle">
                <h2>Assets</h2>
                <div className='assetsDiv2'>
                    <ul className='assetsUl'>
                        <h3>BTC</h3>
                        <li className='assetsLi'><span className='insideLiSpan1'><b>Current</b>: ${props.apiData[0].btc1}</span>
                            <span className='insideLiSpan1'><b>Previous Month:</b> ${props.apiData[1].btc2}</span>
                            <b>Previous Year</b>: ${props.apiData[2].btc3}
                        </li>

                        <h3>CRUDE OIL</h3>
                        <li className='assetsLi'><span className='insideLiSpan1'> <b>Current</b>: ${props.apiData[3].oil1}</span>
                            <span className='insideLiSpan1'><b>Previous Month:</b> ${props.apiData[4].oil2}</span>
                            <b>Previous Year</b>: ${props.apiData[5].oil3}
                        </li>

                        <h3>Regular Gas Per Gallon</h3>
                        <li className='assetsLi'><span className='insideLiSpan1'> <b>Current</b>: ${props.apiData[6].gas1}</span>
                            <span className='insideLiSpan1'><b>Previous Month:</b> ${props.apiData[7].gas2}</span>
                            <b>Previous Year:</b> ${props.apiData[8].gas3}
                        </li>

                        <h3>GOLD PER OZ</h3>
                        <li className='assetsLi'><span className='insideLiSpan1'> <b>Current</b>: ${props.apiData[9].gold1}</span>
                            <span className='insideLiSpan1'><b>Previous Month:</b> ${props.apiData[10].gold2}</span>
                            <b>Previous Year:</b> ${props.apiData[11].gold3}
                        </li>
                    </ul>
                </div>
            </article>
        </>
    )
}

export default Assets
