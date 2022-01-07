import React from 'react'
import '../App.css'


export default function Cpi(props) {
    const { cpi1, cpi2, ppi1, ppi2 } = props
    return (
        <>
            <article className="cpiArticle">
                <h2>Consumer Price Inflation</h2>
                <div className='cpiDiv'>
                    <ul className='cpiUl'>
                        <span>CPI</span>
                        <li className='cpiLi'><span className='insideLiSpan1'><b>Current:</b> {props.apiData[12].cpi1}</span> <b>Previous Month:</b> {props.apiData[13].cpi2}</li>

                        <span>PPI</span>
                        <li className='cpiLi'><span className='insideLiSpan1'><b>Current:</b> {props.apiData[14].ppi1}</span> <b>Previous Month:</b> {props.apiData[15].ppi2}</li>
                    </ul>
                </div>
            </article>
        </>
    )
}
