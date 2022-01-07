import { useState, useEffect } from 'react';
import '../App.css';
import axios from '../axios';
import requests from '../requests';
import Assets from './Assets';
import Yields from './Yields';
import Cpi from './Cpi';
import Banking from './Banking';
import Fiscal from './Fiscal';

function Home() {
    const [apiData, setApiData] = useState([
        { btc1: null },
        { btc2: null },
        { oil1: null },
        { oil2: null },
        { gas1: null },
        { gas2: null },
        { tbond1: null },
        { tbond2: null },
        { aaaBond1: null },
        { aaaBond2: null },
        { cpi1: null },
        { cpi2: null },
        { ppi1: null },
        { ppi2: null },
        { fedBal1: null },
        { fedBal2: null },
        { check1: null },
        { check2: null },
        { m21: null },
        { m22: null },
        { rrp1: null },
        { rrp2: null },
        { bankR1: null },
        { bankR2: null },
        { ffr1: null },
        { ffr2: null },
        { debtGdp1: null },
        { debtGdp2: null },
        { tradeBal1: null },
        { tradeBal2: null },
        { sod1: null },
        { sod2: null },
        { gdp1: null },
        { gdp2: null }
    ])

    const [loading, setLoading] = useState(true)



    useEffect(() => {
        const sendData = async () => {

            await axios.get(requests.fetchBtc).then(data => {
                let bit1 = { btc1: data.data.dataset.data[0][1].toLocaleString('en-US') }
                let bit2 = { btc2: data.data.dataset.data[30][4].toLocaleString('en-US') }
                apiData[0] = bit1
                apiData[1] = bit2
                // return (apiData.btc1, apiData.btc2)
            })

            await axios.get(requests.fetchOil).then(data => {
                let oil1 = { oil1: data.data.dataset.data[0][1] }
                let oil2 = { oil2: data.data.dataset.data[21][1] }
                apiData[2] = oil1
                apiData[3] = oil2
                // return (apiData.oil1, apiData.oil2)
            })

            await axios.get(requests.fetchGas).then(data => {
                let gas1 = { gas1: data.data.dataset.data[0][1] }
                let gas2 = { gas2: data.data.dataset.data[5][1] }
                apiData[4] = gas1
                apiData[5] = gas2
                // return (apiData.gas1, apiData.gas2)
            })

            await axios.get(requests.fecthGold).then(data => {
                let gold1 = { gold1: data.data.dataset.data[0][1].toLocaleString('en-US') }
                let gold2 = { gold2: data.data.dataset.data[22][1].toLocaleString('en-US') }
                apiData[6] = gold1
                apiData[7] = gold2
                // return (apiData.gold1, apiData.gold2)
            })

            await axios.get(requests.fecthTBond).then(data => {
                let tbond1 = { tbond1: data.data.dataset.data[0][10].toLocaleString('en-US') }
                let tbond2 = { tbond2: data.data.dataset.data[20][10].toLocaleString('en-US') }
                apiData[8] = tbond1
                apiData[9] = tbond2
                // return (apiData.tbond1, apiData.tbond2)
            })

            await axios.get(requests.fecthAaaYield).then(data => {
                let aaaBond1 = { aaaBond1: data.data.dataset.data[0][1].toLocaleString('en-US') }
                let aaaBond2 = { aaaBond2: data.data.dataset.data[21][1].toLocaleString('en-US') }
                apiData[10] = aaaBond1
                apiData[11] = aaaBond2
                // return (apiData.aaaBond1, apiData.aaaBond2)
            })

            await axios.get(requests.fetchCpi).then(data => {
                let cpi1 = { cpi1: data.data.dataset.data[0][1] }
                let cpi2 = { cpi2: data.data.dataset.data[12][1] }
                apiData[12] = cpi1
                apiData[13] = cpi2
                // return (apiData.cpi1, apiData.cpi2)
            })

            await axios.get(requests.fetchPpi).then(data => {
                let ppi1 = { ppi1: data.data.dataset.data[0][1] }
                let ppi2 = { ppi2: data.data.dataset.data[12][1] }
                apiData[14] = ppi1
                apiData[15] = ppi2
                // return (apiData.ppi1, apiData.ppi2)
            })

            await axios.get(requests.fecthFedBal).then(data => {
                let fedBal1 = { fedBal1: (data.data.dataset.data[0][1] * 1000000).toLocaleString("en-US") }
                let fedBal2 = { fedBal2: (data.data.dataset.data[4][1] * 1000000).toLocaleString("en-US") }
                apiData[16] = fedBal1
                apiData[17] = fedBal2
                // return (apiData.fedBal1, apiData.fedBal2)
            })
            await axios.get(requests.fetchCheckDeposit).then(data => {
                let check1 = { check1: (data.data.dataset.data[0][1] * 1000000).toLocaleString("en-US") }
                let check2 = { check2: (data.data.dataset.data[1][1] * 1000000).toLocaleString("en-US") }
                apiData[18] = check1
                apiData[19] = check2
                // return (apiData.check1, apiData.check2)
            })
            await axios.get(requests.fecthM2).then(data => {
                let m21 = { m21: (data.data.dataset.data[0][1] * 1000000).toLocaleString("en-US") }
                let m22 = { m22: (data.data.dataset.data[1][1] * 1000000).toLocaleString("en-US") }
                apiData[20] = m21
                apiData[21] = m22
                // return (apiData.m21, apiData.m22)
            })
            await axios.get(requests.fetchReverseRepo).then(data => {
                let rrp1 = { rrp1: (data.data.dataset.data[0][1] * 1000000).toLocaleString("en-US") }
                let rrp2 = { rrp2: (data.data.dataset.data[20][1] * 1000000).toLocaleString("en-US") }
                apiData[22] = rrp1
                apiData[23] = rrp2
                // return (apiData.rrp1, apiData.rrp2)
            })
            await axios.get(requests.fecthBankReserves).then(data => {
                let bankR1 = { bankR1: (data.data.dataset.data[0][1] * 1000000).toLocaleString("en-US") }
                let bankR2 = { bankR2: (data.data.dataset.data[1][1] * 1000000).toLocaleString("en-US") }
                apiData[24] = bankR1
                apiData[25] = bankR2
                // return (apiData.bankR1, apiData.bankR2)
            })
            await axios.get(requests.fetchFfr).then(data => {
                let ffr1 = { ffr1: data.data.dataset.data[0][1] }
                let ffr2 = { ffr2: data.data.dataset.data[30][1] }
                apiData[26] = ffr1
                apiData[27] = ffr2
                // return (apiData.ffr1, apiData.ffr2)
            })
            await axios.get(requests.fecthDebtToGdp).then(data => {
                let debtGdp1 = { debtGdp1: Math.round(data.data.dataset.data[0][1]) }
                let debtGdp2 = { debtGdp2: Math.round(data.data.dataset.data[1][1]) }
                apiData[28] = debtGdp1
                apiData[29] = debtGdp2
                // return (apiData.debtGdp1, apiData.debtGdp2)
            })
            await axios.get(requests.fetchTradeBal).then(data => {
                let tradeBal1 = { tradeBal1: (data.data.dataset.data[0][1] * 1000000).toLocaleString("en-US") }
                let tradeBal2 = { tradeBal2: (data.data.dataset.data[1][1] * 1000000).toLocaleString("en-US") }
                apiData[30] = tradeBal1
                apiData[31] = tradeBal2
                // return (apiData.tradeBal1, apiData.tradeBal2)
            })
            await axios.get(requests.fetchSurplusOrDeficit).then(data => {
                let sod1 = { sod1: (data.data.dataset.data[0][1] * 1000000).toLocaleString("en-US") }
                let sod2 = { sod2: (data.data.dataset.data[1][1] * 1000000).toLocaleString("en-US") }
                apiData[32] = sod1
                apiData[33] = sod2
                // return (apiData.sod1, apiData.sod2)
            })
            await axios.get(requests.fecthGdp).then(data => {
                let gdp1 = { gdp1: (data.data.dataset.data[0][1] * 1000000).toLocaleString("en-US") }
                let gdp2 = { gdp2: (data.data.dataset.data[1][1] * 1000000).toLocaleString("en-US") }
                apiData[34] = gdp1
                apiData[35] = gdp2
                setApiData(prevState => [...prevState])
                // return (apiData.gdp1, apiData.gdp2)
            })
        }

        sendData().then(() => {
            setLoading(!loading)
        })

    }, [])

    return (
        <main className="mainFlex">
            {loading ? <div style={{ color: 'white' }} >Hold on we are fecthing some data! Dont you know you gotta wait for greatness....</div> :
                <>
                    <section className="topSection">
                        <div className="assetsDiv1">
                            <Assets   apiData={apiData} />
                        </div>
                        <div className="yieldsDiv1">
                            <Yields apiData={apiData} />
                        </div>
                        <div className="cpiDiv1">
                            < Cpi apiData={apiData} />
                        </div>
                    </section>
                    <section className="bottomSection">
                        <div className="bankingDiv1">
                            < Banking apiData={apiData} />
                        </div>
                        <div className="fiscalDiv1">
                            <Fiscal apiData={apiData} />
                        </div>
                    </section>
                </>
            }
        </main>



    );
}
export default Home