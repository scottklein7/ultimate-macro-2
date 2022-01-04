import React from 'react'
import '../App.css'


function Fiscal({ debtGdp1, debtGdp2, tradeBal1, tradeBal2, sod1, sod2, gdp1, gdp2 }) {
    return (
        <>
        <article className="assetsArticle">
        <h2>Fiscal</h2>
            <div className='assetsDiv2'>
                <ul className='assetsUl'>
                    <li className='assetsLi'>Current: {debtGdp1}% Previous Month: {debtGdp2}%</li>
                    <li className='assetsLi'>Current: ${tradeBal1} Previous Month: ${tradeBal2}</li>
                    <li className='assetsLi'>Current: ${sod1} Previous Month: ${sod2}</li>
                    <li className='assetsLi'>Current: ${gdp1} Previous Month: ${gdp2}</li>
                    {/* <img src="https://fred.stlouisfed.org/graph/fredgraph.png?g=KvuD" alt="" /> */}
                </ul>
            </div>
        </article>
        </>
    )
}

export default Fiscal
