import { useState, useEffect } from 'react';
import './App.css';
import axios from './axios';
import requests from './requests';
import Assets from './components/Assets';
import Yields from './components/Yields';

function App() {


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
  }

  useEffect(() => {
    sendData()
    return () => {
      
    }
  }, [])


  return (
    <div className="App">
      <Assets btc1={btc1} btc2={btc2} gas1={gas1} gas2={gas2} oil1={oil1} oil2={oil2} gold1={gold1} gold2={gold2} />
      <Yields tbond1={tbond1} tbond2={tbond2} aaaBond1={aaaBond1} aaaBond2={aaaBond2} />
    </div>
  );
}

export default App