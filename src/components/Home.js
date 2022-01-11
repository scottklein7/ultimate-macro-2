import { useState, useEffect } from 'react';
import '../App.css';
import axios from '../axios';
import requests from '../requests';
import Assets from './Assets';
import Yields from './Yields';
import Cpi from './Cpi';
import Banking from './Banking';
import Fiscal from './Fiscal';
import Header from './Header';

function Home() {
    const [apiData, setApiData] = useState([
        { btc1: null },
        { btc2: null },
        { btc3: null },
        { oil1: null },
        { oil2: null },
        { oil3: null },
        { gas1: null },
        { gas2: null },
        { gas3: null },
        { gold1: null },
        { gold2: null },
        { gold3: null },
        { tbond1: null },
        { tbond2: null },
        { tbond3: null },
        { aaaBond1: null },
        { aaaBond2: null },
        { aaaBond3: null },
        { cpi1: null },
        { cpi2: null },
        { cpi3: null },
        { ppi1: null },
        { ppi2: null },
        { ppi3: null },
        { fedBal1: null },
        { fedBal2: null },
        { fedBal3: null },
        { check1: null },
        { check2: null },
        { check3: null },
        { m21: null },
        { m22: null },
        { m23: null },
        { rrp1: null },
        { rrp2: null },
        { rrp3: null },
        { bankR1: null },
        { bankR2: null },
        { bankR3: null },
        { ffr1: null },
        { ffr2: null },
        { ffr3: null },
        { debtGdp1: null },
        { debtGdp2: null },
        { debtGdp3: null },
        { tradeBal1: null },
        { tradeBal2: null },
        { tradeBal3: null },
        { sod1: null },
        { sod2: null },
        { sod3: null },
        { gdp1: null },
        { gdp2: null },
        { gdp3: null }
    ])

    const [loading, setLoading] = useState(true)



    useEffect(() => {
        const sendData = async () => {

            await axios.get(requests.fetchBtc).then(data => {
                let bit1 = { btc1: data.data.dataset.data[0][4].toLocaleString('en-US') }
                let bit2 = { btc2: data.data.dataset.data[30][4].toLocaleString('en-US') }
                let bit3 = { btc3: data.data.dataset.data[363][4].toLocaleString('en-US') }
                apiData[0] = bit1
                apiData[1] = bit2
                apiData[2] = bit3
                return (apiData.btc1, apiData.btc2, apiData.bit3)
            })

            await axios.get(requests.fetchOil).then(data => {
                let oil1 = { oil1: data.data.dataset.data[0][1] }
                let oil2 = { oil2: data.data.dataset.data[21][1] }
                let oil3 = { oil3: data.data.dataset.data[256][1] }
                apiData[3] = oil1
                apiData[4] = oil2
                apiData[5] = oil3
                return (apiData.oil1, apiData.oil2, apiData.oil3)
            })

            await axios.get(requests.fetchGas).then(data => {
                let gas1 = { gas1: data.data.dataset.data[0][1] }
                let gas2 = { gas2: data.data.dataset.data[5][1] }
                let gas3 = { gas3: data.data.dataset.data[51][1] }
                apiData[6] = gas1
                apiData[7] = gas2
                apiData[8] = gas3
                return (apiData.gas1, apiData.gas2, apiData.gas3)
            })

            await axios.get(requests.fecthGold).then(data => {
                let gold1 = { gold1: data.data.dataset.data[0][1].toLocaleString('en-US') }
                let gold2 = { gold2: data.data.dataset.data[22][1].toLocaleString('en-US') }
                let gold3 = { gold3: data.data.dataset.data[251][1].toLocaleString('en-US') }
                apiData[9] = gold1
                apiData[10] = gold2
                apiData[11] = gold3
                return (apiData.gold1, apiData.gold2, apiData.gold3)
            })

            await axios.get(requests.fecthTBond).then(data => {
                let tbond1 = { tbond1: data.data.dataset.data[0][10].toLocaleString('en-US') }
                let tbond2 = { tbond2: data.data.dataset.data[20][10].toLocaleString('en-US') }
                let tbond3 = { tbond3: data.data.dataset.data[250][10].toLocaleString('en-US') }
                apiData[12] = tbond1
                apiData[13] = tbond2
                apiData[14] = tbond3
                return (apiData.tbond1, apiData.tbond2, apiData.tbond3)
            })

            await axios.get(requests.fecthAaaYield).then(data => {
                let aaaBond1 = { aaaBond1: data.data.dataset.data[0][1].toLocaleString('en-US') }
                let aaaBond2 = { aaaBond2: data.data.dataset.data[21][1].toLocaleString('en-US') }
                let aaaBond3 = { aaaBond3: data.data.dataset.data[259][1].toLocaleString('en-US') }
                apiData[15] = aaaBond1
                apiData[16] = aaaBond2
                apiData[17] = aaaBond3
                return (apiData.aaaBond1, apiData.aaaBond2, apiData.aaaBond3)
            })

            await axios.get(requests.fetchCpi).then(data => {
                let cpi1 = { cpi1: data.data.dataset.data[0][1] }
                let cpi2 = { cpi2: data.data.dataset.data[1][1] }
                let cpi3 = { cpi3: data.data.dataset.data[12][1] }
                apiData[18] = cpi1
                apiData[19] = cpi2
                apiData[20] = cpi3
                return (apiData.cpi1, apiData.cpi2, apiData.cpi3)
            })

            await axios.get(requests.fetchPpi).then(data => {
                let ppi1 = { ppi1: data.data.dataset.data[0][1] }
                let ppi2 = { ppi2: data.data.dataset.data[1][1] }
                let ppi3 = { ppi3: data.data.dataset.data[12][1] }
                apiData[21] = ppi1
                apiData[22] = ppi2
                apiData[23] = ppi3
                return (apiData.ppi1, apiData.ppi2, apiData.ppi3)
            })

            await axios.get(requests.fecthFedBal).then(data => {
                let fedBal1 = { fedBal1: (data.data.dataset.data[0][1] * 1000000).toLocaleString("en-US") }
                let fedBal2 = { fedBal2: (data.data.dataset.data[4][1] * 1000000).toLocaleString("en-US") }
                let fedBal3 = { fedBal3: (data.data.dataset.data[51][1] * 1000000).toLocaleString("en-US") }
                apiData[24] = fedBal1
                apiData[25] = fedBal2
                apiData[26] = fedBal3
                return (apiData.fedBal1, apiData.fedBal2)
            })
            await axios.get(requests.fetchCheckDeposit).then(data => {
                let check1 = { check1: (data.data.dataset.data[0][1] * 1000000).toLocaleString("en-US") }
                let check2 = { check2: (data.data.dataset.data[1][1] * 1000000).toLocaleString("en-US") }
                let check3 = { check3: (data.data.dataset.data[3][1] * 1000000).toLocaleString("en-US") }
                apiData[27] = check1
                apiData[28] = check2
                apiData[29] = check3
                return (apiData.check1, apiData.check2, apiData.check3)
            })
            await axios.get(requests.fecthM2).then(data => {
                let m21 = { m21: (data.data.dataset.data[0][1] * 1000000).toLocaleString("en-US") }
                let m22 = { m22: (data.data.dataset.data[1][1] * 1000000).toLocaleString("en-US") }
                let m23 = { m23: (data.data.dataset.data[10][1] * 1000000).toLocaleString("en-US") }
                apiData[30] = m21
                apiData[31] = m22
                apiData[32] = m23
                return (apiData.m21, apiData.m22, apiData.m23)
            })
            await axios.get(requests.fetchReverseRepo).then(data => {
                let rrp1 = { rrp1: (data.data.dataset.data[0][1] * 1000000).toLocaleString("en-US") }
                let rrp2 = { rrp2: (data.data.dataset.data[20][1] * 1000000).toLocaleString("en-US") }
                let rrp3 = { rrp3: (data.data.dataset.data[247][1] * 1000000).toLocaleString("en-US") }
                apiData[33] = rrp1
                apiData[34] = rrp2
                apiData[35] = rrp3
                return (apiData.rrp1, apiData.rrp2, apiData.rrp3)
            })
            await axios.get(requests.fecthBankReserves).then(data => {
                let bankR1 = { bankR1: (data.data.dataset.data[0][1] * 1000000).toLocaleString("en-US") }
                let bankR2 = { bankR2: (data.data.dataset.data[1][1] * 1000000).toLocaleString("en-US") }
                let bankR3 = { bankR3: (data.data.dataset.data[11][1] * 1000000).toLocaleString("en-US") }
                apiData[36] = bankR1
                apiData[37] = bankR2
                apiData[38] = bankR3
                return (apiData.bankR1, apiData.bankR2, apiData.bankR3)
            })
            await axios.get(requests.fetchFfr).then(data => {
                let ffr1 = { ffr1: data.data.dataset.data[0][1] }
                let ffr2 = { ffr2: data.data.dataset.data[30][1] }
                let ffr3 = { ffr3: data.data.dataset.data[363][1] }
                apiData[39] = ffr1
                apiData[40] = ffr2
                apiData[41] = ffr3
                return (apiData.ffr1, apiData.ffr2, apiData.ffr3)
            })
            await axios.get(requests.fecthDebtToGdp).then(data => {
                let debtGdp1 = { debtGdp1: Math.round(data.data.dataset.data[0][1]) }
                let debtGdp2 = { debtGdp2: Math.round(data.data.dataset.data[1][1]) }
                let debtGdp3 = { debtGdp3: Math.round(data.data.dataset.data[4][1]) }
                apiData[42] = debtGdp1
                apiData[43] = debtGdp2
                apiData[44] = debtGdp3
                return (apiData.debtGdp1, apiData.debtGdp2, apiData.debtGdp2)
            })
            await axios.get(requests.fetchTradeBal).then(data => {
                let tradeBal1 = { tradeBal1: (data.data.dataset.data[0][1] * 1000000).toLocaleString("en-US") }
                let tradeBal2 = { tradeBal2: (data.data.dataset.data[1][1] * 1000000).toLocaleString("en-US") }
                let tradeBal3 = { tradeBal3: (data.data.dataset.data[12][1] * 1000000).toLocaleString("en-US") }
                apiData[45] = tradeBal1
                apiData[46] = tradeBal2
                apiData[47] = tradeBal3
                return (apiData.tradeBal1, apiData.tradeBal2, apiData.tradeBal3)
            })
            await axios.get(requests.fetchSurplusOrDeficit).then(data => {
                let sod1 = { sod1: (data.data.dataset.data[0][1] * 1000000).toLocaleString("en-US") }
                let sod2 = { sod2: (data.data.dataset.data[1][1] * 1000000).toLocaleString("en-US") }
                let sod3 = { sod3: (data.data.dataset.data[2][1] * 1000000).toLocaleString("en-US") }
                apiData[48] = sod1
                apiData[49] = sod2
                apiData[50] = sod3
                return (apiData.sod1, apiData.sod2, apiData.sod3)
            })
            await axios.get(requests.fecthGdp).then(data => {
                let gdp1 = { gdp1: (data.data.dataset.data[0][1] * 1000000).toLocaleString("en-US") }
                let gdp2 = { gdp2: (data.data.dataset.data[1][1] * 1000000).toLocaleString("en-US") }
                let gdp3 = { gdp3: (data.data.dataset.data[4][1] * 1000000).toLocaleString("en-US") }
                apiData[51] = gdp1
                apiData[52] = gdp2
                apiData[53] = gdp3
                setApiData(prevState => [...prevState])
                return (apiData.gdp1, apiData.gdp2, apiData.gdp3)
            })
        }

        sendData().then(() => {
            let mounted = true
            setLoading(!loading)

        })
        return function cleanup() {
            let mounted = false
            console.log(mounted)
        }

    }, [])

    return (
        <main className="mainFlex">
            {loading ? <div style={{ color: 'white' }} >Hold on we are fecthing some data! Dont you know you gotta wait for greatness.... plus I am using the free api option so this may take a second...</div> :
                <>
                    <section className="topSection">
                        <div className="assetsDiv1">
                            <Assets apiData={apiData} />
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