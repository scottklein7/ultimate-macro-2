import React from 'react'
import '../App.css'


export default function Cpi(props) {
    const { cpi1, cpi2, ppi1, ppi2 } = props
    return (
        <>
            <article className="cpiArticle">
                <h2>Price Inflation</h2>
                <div className='cpiDiv'>
                    <ul className='cpiUl'>
                        <h3>CPI</h3>
                        <div className="listDiv">
                            <li className='cpiLi'><span className='insideLiSpan1'><b>Current:</b> {props.apiData[18].cpi1}</span>
                                <span className='insideLiSpan1'><b>Previous Month:</b> {props.apiData[19].cpi2}</span>
                                <b>Previous Year:</b> {props.apiData[20].cpi3}
                            </li>
                        </div>

                        <h3>PPI</h3>
                        <div className="listDiv">
                            <li className='cpiLi'><span className='insideLiSpan1'><b>Current:</b> {props.apiData[21].ppi1}</span>
                                <span className='insideLiSpan1'><b>Previous Month:</b> {props.apiData[22].ppi2}</span>
                                <b>Previous Year:</b> {props.apiData[23].ppi3}
                            </li>
                        </div>
                    </ul>
                </div>
            </article>
        </>
    )
}
