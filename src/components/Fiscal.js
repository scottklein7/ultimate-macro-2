import React from 'react'
import '../App.css'


function Fiscal(props) {
    const { debtGdp1, debtGdp2, tradeBal1, tradeBal2, sod1, sod2, gdp1, gdp2 } = props
    return (
        <>
            <article className="fiscalArticle">
                <h2>Fiscal</h2>
                <div className='fiscalDiv2'>
                    <ul className='fiscalUl'>
                        <h3>Debt:GDP</h3>
                        <div className="listDiv">
                            <li className='fiscalLi'> <span className='insideLiSpan1'> <b>Current:</b> {props.apiData[42].debtGdp1}%</span>
                                <span className='insideLiSpan1'><b>Previous Month:</b> {props.apiData[43].debtGdp2}%</span>
                                <b>Previous Year:</b> {props.apiData[44].debtGdp3}%
                            </li>
                        </div>

                        <h3>Trade Balance</h3>
                        <div className="listDiv">
                            <li className='fiscalLi'><span className='insideLiSpan1'> <b>Current:</b> ${props.apiData[45].tradeBal1}</span>
                                <span className='insideLiSpan1'><b>Previous Month:</b> ${props.apiData[46].tradeBal2}</span>
                                <b>Previous Year:</b> ${props.apiData[47].tradeBal3}
                            </li>
                        </div>

                        <h3>Monthly Surplus/Deficit</h3>
                        <div className="listDiv">
                            <li className='fiscalLi'><span className='insideLiSpan1'> <b>Current:</b> ${props.apiData[48].sod1}</span>
                                <span className='insideLiSpan1'><b>Previous Month:</b> ${props.apiData[49].sod2}</span>
                                <b>Previous Year:</b> ${props.apiData[50].sod3}
                            </li>
                        </div>

                        <h3>GDP</h3>
                        <div className="listDiv">
                            <li className='fiscali'><span className='insideLiSpan1'> <b>Current:</b> ${props.apiData[51].gdp1}</span>
                                <span className='insideLiSpan1'><b>Previous Month:</b> ${props.apiData[52].gdp2}</span>
                                <b>Previous Year:</b> ${props.apiData[53].gdp3}
                            </li>
                        </div>

                    </ul>
                </div>
            </article>
        </>
    )
}

export default Fiscal
