import axios from "./axios";
const API_KEY = process.env.REACT_APP_API_KEY

const requests = {
    fetchBtc: `/BITFINEX/BTCUSD.json?api_key=${API_KEY}`,
    fetchOil: `/OPEC/ORB.json?api_key=${API_KEY}`,
    fetchGas: `/FRED/GASREGW.json?api_key=${API_KEY}`,
    fecthGold: `/LBMA/GOLD.json?api_key=${API_KEY}`,
    fecthFedBal: `/FED/RESPPA_N_WW.json?api_key=${API_KEY}`,
    fecthTBond: `/USTREASURY/YIELD.json?api_key=${API_KEY}`,
    fecthAaaYield: `/ML/AAAEY.json?api_key=${API_KEY}`,
    fetchCheckDeposit: `/FED/FL153020005_Q.json?api_key=${API_KEY}`,
    fecthM2: `/FED/M2_N_M.json?api_key=${API_KEY}`,
    fetchReverseRepo: `/FRED/RRPONTSYD.json?api_key=${API_KEY}`,
    fecthBankReserves: `/FRED/TOTRESNS.json?api_key=${API_KEY}`,
    fetchFfr: `/FRED/DFF.json?api_key=${API_KEY}`,
    fecthDebtToGdp: `/FRED/GFDEGDQ188S.json?api_key=${API_KEY}`,
    fetchTradeBal: `/BOPGSTB.json?api_key=${API_KEY}`,
    fetchSurplusOrDeficit: `/FRED/FYFSD.json?api_key=${API_KEY}`,
    fecthGdp: `/FRED/GDP.json?api_key=${API_KEY}`,
    fetchPpi: `/FRED/PPIACO.json?api_key=${API_KEY}`,
    
}

export default requests