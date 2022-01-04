import React from 'react'

function Banking({ fedBal1, fedBal2, check1, check2, m21, m22, rrp1, rrp2 }) {
    return (
        <>
            <article className="bankingArticle">
                <div className='bankingDiv'>
                    <ul className='bankingUl'>
                        <li className='bankingLi'>Current: ${fedBal1} Previous Month: ${fedBal2}</li>
                        <li className='bankingLi'>Current: ${check1} Previous Month: ${check2}</li>
                        <li className='bankingLi'>Current: ${m21} Previous Month: {m22}</li>
                        <li className='bankingLi'>Current: ${rrp1} Previous Month: ${rrp2}</li>
                    </ul>
                </div> 
            </article>
        </>
    )
}

export default Banking
