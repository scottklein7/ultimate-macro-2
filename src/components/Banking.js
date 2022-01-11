import React from 'react'
import '../App.css'


function Banking(props) {
    const { fedBal1, fedBal2, check1, check2, m21, m22, rrp1, rrp2, bankR1, bankR2, ffr1, ffr2 } = props
    return (
        <>
            <article className="bankingArticle">
                <h2>Banking</h2>
                <div className='bankingDiv2'>
                    <ul className='bankingUl'>
                        <h3>Fed's Balance Sheet</h3>
                        <li className='bankingLi'><span className='insideLiSpan1'><b>Current:</b> ${props.apiData[24].fedBal1}</span>
                            <span className='insideLiSpan1'><b>Previous Month:</b> ${props.apiData[25].fedBal2}</span>
                            <b>Previous Year:</b> ${props.apiData[26].fedBal3}
                        </li>

                        <h3>Retail Checking Accounts</h3>
                        <li className='bankingLi'><span className='insideLiSpan1'><b>Current:</b> ${props.apiData[27].check1}</span>
                            <span className='insideLiSpan1'><b>Previous Month:</b> ${props.apiData[28].check2}</span>
                            <b>Previous Year:</b> ${props.apiData[29].check3}
                        </li>

                        <h3>M2</h3>
                        <li className='bankingLi'><span className='insideLiSpan1'><b>Current:</b> ${props.apiData[30].m21}</span>
                            <span className='insideLiSpan1'><b>Previous Month:</b> {props.apiData[31].m22}</span>
                            <b>Previous Year:</b> {props.apiData[32].m23}
                        </li>

                        <h3>Reverse Repo</h3>
                        <li className='bankingLi'><span className='insideLiSpan1'><b>Current:</b> ${props.apiData[33].rrp1}</span>
                            <span className='insideLiSpan1'><b>Previous Month:</b> ${props.apiData[34].rrp2}</span>
                            <b>Previous Year:</b> ${props.apiData[35].rrp3}
                        </li>

                        <h3>Bank Reserves</h3>
                        <li className='bankingLi'><span className='insideLiSpan1'><b>Current:</b> ${props.apiData[36].bankR1}</span>
                            <span className='insideLiSpan1'><b>Previous Month:</b> ${props.apiData[37].bankR2}</span>
                            <b>Previous Year:</b> ${props.apiData[38].bankR3}
                        </li>

                        <h3>Federal Funds Rate</h3>
                        <li className='bankingLi'><span className='insideLiSpan1'><b>Current:</b> {props.apiData[39].ffr1}%</span>
                            <span className='insideLiSpan1'><b>Previous Month:</b> {props.apiData[40].ffr2}%</span>
                            <b>Previous Year:</b> {props.apiData[41].ffr3}%
                        </li>
                    </ul>
                </div>
            </article>
        </>
    )
}

export default Banking
