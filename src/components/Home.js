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

        {btc1: null},
        {btc2: null},
        {oil1: null},
        {oil2: null},
        {gas1: null},
        {gas2: null},
        {tbond1: null},
        {tbond2: null},
        {aaaBond1: null},
        {aaaBond2: null},
        {cpi1: null},
        {cpi2: null},
        {ppi1: null},
        {ppi2: null},
        {fedBal1: null},
        {fedBal2: null},
        {check1: null},
        {check2: null},
        {m21: null},
        {m22: null},
        {rrp1: null},
        {rrp2: null},
        {bankR1: null},
        {bankR2: null},
        {ffr1: null},
        {ffr2: null},
        {debtGdp1: null},
        {debtGdp2: null},
        {tradeBal1: null},
        {tradeBal2: null},
        {sod1: null},
        {sod2: null},
        {gdp1: null},
        {gdp2: null}
    ])

    const [loading, setLoading] = useState(true)

    const sendData = async () => {

        await axios.get(requests.fetchBtc).then(data => {
            setApiData({ ...apiData, btc1: data.data.dataset.data[0][1].toLocaleString('en-US') })
            setApiData({ ...apiData, btc2: data.data.dataset.data[30][4].toLocaleString('en-US') })
            return (apiData.btc1, apiData.btc2)
        })

        await axios.get(requests.fetchOil).then(data => {
            setApiData({ ...apiData, oil1: data.data.dataset.data[0][1] })
            setApiData({ ...apiData, oil2: data.data.dataset.data[21][1] })
            return (apiData.oil1, apiData.oil2)
        })

        await axios.get(requests.fetchGas).then(data => {
            setApiData({ ...apiData, gas1: data.data.dataset.data[0][1] })
            setApiData({ ...apiData, gas2: data.data.dataset.data[5][1] })
            return (apiData.gas1, apiData.gas2)
        })

        await axios.get(requests.fecthGold).then(data => {
            setApiData({ ...apiData, gold1: data.data.dataset.data[0][1].toLocaleString('en-US') })
            setApiData({ ...apiData, gold2: data.data.dataset.data[22][1].toLocaleString('en-US') })
            return (apiData.gold1, apiData.gold2)
        })

        await axios.get(requests.fecthTBond).then(data => {
            setApiData({ ...apiData, tbond1: data.data.dataset.data[0][10].toLocaleString('en-US') })
            setApiData({ ...apiData, tbond2: data.data.dataset.data[20][10].toLocaleString('en-US') })
            return (apiData.tbond1, apiData.tbond2)
        })

        await axios.get(requests.fecthAaaYield).then(data => {
            setApiData({ ...apiData, aaaBond1: data.data.dataset.data[0][1].toLocaleString('en-US') })
            setApiData({ ...apiData, aaaBond2: data.data.dataset.data[21][1].toLocaleString('en-US') })
            return (apiData.aaaBond1, apiData.aaaBond2)
        })

        await axios.get(requests.fetchCpi).then(data => {
            setApiData({ ...apiData, cpi1: data.data.dataset.data[0][1] })
            setApiData({ ...apiData, cpi2: data.data.dataset.data[12][1] })
            return (apiData.cpi1, apiData.cpi2)
        })

        await axios.get(requests.fetchPpi).then(data => {
            setApiData({ ...apiData, ppi1: data.data.dataset.data[0][1] })
            setApiData({ ...apiData, ppi2: data.data.dataset.data[12][1] })
            return (apiData.ppi1, apiData.ppi2)
        })

        await axios.get(requests.fecthFedBal).then(data => {
            setApiData({ ...apiData, fedBal1: (data.data.dataset.data[0][1] * 1000000).toLocaleString("en-US") })
            setApiData({ ...apiData, fedBal2: (data.data.dataset.data[4][1] * 1000000).toLocaleString("en-US") })
            return (apiData.fedBal1, apiData.fedBal2)
        })
        await axios.get(requests.fetchCheckDeposit).then(data => {
            setApiData({ ...apiData, check1: (data.data.dataset.data[0][1] * 1000000).toLocaleString("en-US") })
            setApiData({ ...apiData, check2: (data.data.dataset.data[1][1] * 1000000).toLocaleString("en-US") })
            return (apiData.check1, apiData.check2)
        })
        await axios.get(requests.fecthM2).then(data => {
            setApiData({ ...apiData, m21: (data.data.dataset.data[0][1] * 1000000).toLocaleString("en-US") })
            setApiData({ ...apiData, m22: (data.data.dataset.data[1][1] * 1000000).toLocaleString("en-US") })
            return (apiData.m21, apiData.m22)
        })
        await axios.get(requests.fetchReverseRepo).then(data => {
            setApiData({ ...apiData, rrp1: (data.data.dataset.data[0][1] * 1000000).toLocaleString("en-US") })
            setApiData({ ...apiData, rrp2: (data.data.dataset.data[20][1] * 1000000).toLocaleString("en-US") })
            return (apiData.rrp1, apiData.rrp2)
        })
        await axios.get(requests.fecthBankReserves).then(data => {
            setApiData({ ...apiData, bankR1: (data.data.dataset.data[0][1] * 1000000).toLocaleString("en-US") })
            setApiData({ ...apiData, bankR2: (data.data.dataset.data[1][1] * 1000000).toLocaleString("en-US") })
            return (apiData.bankR1, apiData.bankR2)
        })
        await axios.get(requests.fetchFfr).then(data => {
            setApiData({ ...apiData, ffr1: data.data.dataset.data[0][1] })
            setApiData({ ...apiData, ffr2: data.data.dataset.data[30][1] })
            return (apiData.ffr1, apiData.ffr2)
        })
        await axios.get(requests.fecthDebtToGdp).then(data => {
            setApiData({ ...apiData, debtGdp1: Math.round(data.data.dataset.data[0][1]) })
            setApiData({ ...apiData, debtGdp2: Math.round(data.data.dataset.data[1][1]) })
            return (apiData.debtGdp1, apiData.debtGdp2)
        })
        await axios.get(requests.fetchTradeBal).then(data => {
            setApiData({ ...apiData, tradeBal1: (data.data.dataset.data[0][1] * 1000000).toLocaleString("en-US") })
            setApiData({ ...apiData, tradeBal2: (data.data.dataset.data[1][1] * 1000000).toLocaleString("en-US") })
            return (apiData.tradeBal1, apiData.tradeBal2)
        })
        await axios.get(requests.fetchSurplusOrDeficit).then(data => {
            setApiData({ ...apiData, sod1: (data.data.dataset.data[0][1] * 1000000).toLocaleString("en-US") })
            setApiData({ ...apiData, sod2: (data.data.dataset.data[1][1] * 1000000).toLocaleString("en-US") })
            return (apiData.sod1, apiData.sod2)
        })
        await axios.get(requests.fecthGdp).then(data => {
            setApiData({ ...apiData, gdp1: (data.data.dataset.data[0][1] * 1000000).toLocaleString("en-US") })
            setApiData({ ...apiData, gdp2: (data.data.dataset.data[1][1] * 1000000).toLocaleString("en-US") })
            return (apiData.gdp1, apiData.gdp2)
        })


    }

    useEffect(() => {
        let mounted = true
        sendData().then(() => {
            if (mounted) {
                setLoading(false)
            }
        })
        return function cleanup() {
            mounted = false
        }
    }, [])




    return (


        <main className="mainFlex">
            <section className="topSection">
                <div className="assetsDiv1">
                    <Assets  {...apiData} />
                </div>
                <div className="yieldsDiv1">
                    <Yields{...apiData} />
                </div>
                <div className="cpiDiv1">
                    < Cpi{...apiData} />
                </div>
            </section>
            <section className="bottomSection">
                <div className="bankingDiv1">
                    < Banking{...apiData} />
                </div>
                <div className="fiscalDiv1">
                    <Fiscal{...apiData} />
                </div>
            </section>
        </main>

    );
}
export default Home