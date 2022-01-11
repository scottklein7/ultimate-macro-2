import React from 'react'
import '../App.css'

function Yields(props) {
    return (
        <>

            <article className="yieldArticle">
                <h2>Yields</h2>
                <div className='yieldDiv2'>
                    <ul className='yieldUl'>
                        <h3>Ten Year Treasury</h3>
                        <li className='yieldLi'><span className='insideLiSpan1'><b>Current:</b> {props.apiData[12].tbond1}%</span>
                            <span className='insideLiSpan1'><b>Previous Month:</b> {props.apiData[13].tbond2}%</span>
                            <b>Previous Year:</b> {props.apiData[14].tbond3}
                        </li>

                        <h3>AAA Corp Bond Index</h3>
                        <li className='yieldLi'><span className='insideLiSpan1'><b>Current:</b> {props.apiData[15].aaaBond1}%</span>
                            <span className='insideLiSpan1'><b>Previous Month:</b> {props.apiData[16].aaaBond2}%</span>
                            <b>Previous Year:</b> {props.apiData[17].aaaBond3}%
                        </li>
                    </ul>
                </div>
            </article>
        </>
    )
}

export default Yields
