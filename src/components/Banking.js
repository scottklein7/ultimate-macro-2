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
                        <span>Fed's Balance Sheet</span>
                        <li className='bankingLi'><span className='insideLiSpan1'><b>Current:</b> ${props.apiData[16].fedBal1}</span> <b>Previous Month:</b> ${props.apiData[17].fedBal2}</li>
                        <span>Checking Accounts of Retail</span>
                        <li className='bankingLi'><span className='insideLiSpan1'><b>Current:</b> ${props.apiData[18].check1}</span> <b>Previous Month:</b> ${props.apiData[19].check2}</li>
                        <span>M2</span>
                        <li className='bankingLi'><span className='insideLiSpan1'><b>Current:</b> ${props.apiData[20].m21}</span> <b>Previous Month:</b> {props.apiData[21].m22}</li>
                        <span>Reverse Repo</span>
                        <li className='bankingLi'><span className='insideLiSpan1'><b>Current:</b> ${props.apiData[22].rrp1}</span> <b>Previous Month:</b> ${props.apiData[23].rrp2}</li>
                        <span>Bank Reserves</span>
                        <li className='bankingLi'><span className='insideLiSpan1'><b>Current:</b> ${props.apiData[24].bankR1}</span> <b>Previous Month:</b> ${props.apiData[25].bankR2}</li>
                        <span>Federal Funds Rate</span>
                        <li className='bankingLi'><span className='insideLiSpan1'><b>Current:</b> {props.apiData[26].ffr1}%</span> <b>Previous Month:</b> {props.apiData[27].ffr2}%</li>
                    </ul>
                </div>
            </article>
        </>
    )
}

export default Banking
