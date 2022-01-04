import { useState, useEffect } from 'react';
import '../App.css';
import axios from '../axios';
import requests from '../requests';
import Assets from './Assets';
import Yields from './Yields';
import Cpi from './Cpi';
import Banking from './Banking';

function Home() {
    const [loading, setLoading] = useState(true)
    const [btc1, setBtc1] = useState(null)
    const [btc2, setBtc2] = useState(null)
    const [oil1, setOil1] = useState(null)
    const [oil2, setOil2] = useState(null)
    const [gas1, setGas1] = useState(null)
    const [gas2, setGas2] = useState(null)
    const [gold1, setGold1] = useState(null)
    const [gold2, setGold2] = useState(null)
    const [tbond1, setTbond1] = useState(null)
    const [tbond2, setTbond2] = useState(null)
    const [aaaBond1, setAaaBond1] = useState(null)
    const [aaaBond2, setAaaBond2] = useState(null)
    const [cpi1, setCpi1] = useState(null)
    const [cpi2, setCpi2] = useState(null)
    const [ppi1, setPpi1] = useState(null)
    const [ppi2, setPpi2] = useState(null)
    const [fedBal1, setFedBal1] = useState(null)
    const [fedBal2, setFedBal2] = useState(null)
    const [check1, setCheck1] = useState(null)
    const [check2, setCheck2] = useState(null)
    const [m21, setM21] = useState(null)
    const [m22, setM22] = useState(null)
    const [rrp1, setRrp1] = useState(null)
    const [rrp2, setRrp2] = useState(null)
    const [bankR1, setBankR1] = useState(null)
    const [bankR2, setBankR2] = useState(null)
    const [ffr1, setFfr1] = useState(null)
    const [ffr2, setFfr2] = useState(null)


    const sendData = async () => {

        await axios.get(requests.fetchBtc).then(data => {
            setBtc1(data.data.dataset.data[0][1].toLocaleString('en-US'))
            setBtc2(data.data.dataset.data[30][4].toLocaleString('en-US'))
            return (btc1, btc2)
        })

        await axios.get(requests.fetchOil).then(data => {
            setOil1(data.data.dataset.data[0][1])
            setOil2(data.data.dataset.data[21][1])
            return (oil1, oil2)
        })

        await axios.get(requests.fetchGas).then(data => {
            setGas1(data.data.dataset.data[0][1])
            setGas2(data.data.dataset.data[5][1])
            return (gas1, gas2)
        })

        await axios.get(requests.fecthGold).then(data => {
            setGold1(data.data.dataset.data[0][1].toLocaleString('en-US'))
            setGold2(data.data.dataset.data[22][1].toLocaleString('en-US'))
            return (gold1, gold2)
        })

        await axios.get(requests.fecthTBond).then(data => {
            setTbond1(data.data.dataset.data[0][10].toLocaleString('en-US'))
            setTbond2(data.data.dataset.data[20][10].toLocaleString('en-US'))
            return (tbond1, tbond2)
        })

        await axios.get(requests.fecthAaaYield).then(data => {
            setAaaBond1(data.data.dataset.data[0][1].toLocaleString('en-US'))
            setAaaBond2(data.data.dataset.data[21][1].toLocaleString('en-US'))
            return (aaaBond1, aaaBond2)
        })

        await axios.get(requests.fetchCpi).then(data => {
            setCpi1(data.data.dataset.data[0][1])
            setCpi2(data.data.dataset.data[12][1])
            return (cpi1, cpi2)
        })

        await axios.get(requests.fetchPpi).then(data => {
            setPpi1(data.data.dataset.data[0][1])
            setPpi2(data.data.dataset.data[12][1])
            return (ppi1, ppi2)
        })

        await axios.get(requests.fecthFedBal).then(data => {
            setFedBal1((data.data.dataset.data[0][1] * 1000000).toLocaleString("en-US"))
            setFedBal2((data.data.dataset.data[4][1] * 1000000).toLocaleString("en-US"))
            return (fedBal1, fedBal2)
        })
        await axios.get(requests.fetchCheckDeposit).then(data => {
            setCheck1((data.data.dataset.data[0][1] * 1000000).toLocaleString("en-US"))
            setCheck2((data.data.dataset.data[1][1] * 1000000).toLocaleString("en-US"))
            return (check1, check2)
        })
        await axios.get(requests.fecthM2).then(data => {
            setM21((data.data.dataset.data[0][1] * 1000000).toLocaleString("en-US"))
            setM22((data.data.dataset.data[1][1] * 1000000).toLocaleString("en-US"))
            return (m21, m22)
        })
        await axios.get(requests.fetchReverseRepo).then(data => {
            setRrp1((data.data.dataset.data[0][1] * 1000000).toLocaleString("en-US"))
            setRrp2((data.data.dataset.data[20][1] * 1000000).toLocaleString("en-US"))
            return (rrp1, rrp2)
        })
        await axios.get(requests.fecthBankReserves).then(data => {
            setBankR1((data.data.dataset.data[0][1] * 1000000).toLocaleString("en-US"))
            setBankR2((data.data.dataset.data[1][1] * 1000000).toLocaleString("en-US"))
            return (bankR1, bankR2)
        })
        await axios.get(requests.fetchFfr).then(data => {
            setFfr1(data.data.dataset.data[0][1])
            setFfr2(data.data.dataset.data[30][1])
            return (ffr1, ffr2)
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
        <div className="App">
            <Assets btc1={btc1} btc2={btc2} gas1={gas1} gas2={gas2} 
            oil1={oil1} oil2={oil2} gold1={gold1} gold2={gold2} />

            <Yields tbond1={tbond1} tbond2={tbond2} aaaBond1={aaaBond1} aaaBond2={aaaBond2} />

            < Cpi cpi1={cpi1} cpi2={cpi2} ppi1={ppi1} ppi2={ppi2} />

            < Banking fedBal1={fedBal1} fedBal2={fedBal2} check1={check1} 
            check2={check2} m21={m21} m22={m22} rrp1={rrp1} rrp2={rrp2}
            bankR1={bankR1} bankR2={bankR2} ffr1={ffr1} ffr2={ffr2} />
        </div>
    );
}
export default Home