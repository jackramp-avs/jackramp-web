import './App.css'
import { Route, Routes } from "react-router-dom";
import { HomePage } from './pages/HomePage/Index';
import { SwapPage } from './pages/SwapPage/Index';
import Layout from './Layout';
import LoadingBar from './components/loader/LoadingBar';
import '@rainbow-me/rainbowkit/styles.css';
import { MintPage } from './pages/MintPage/Index';
import { WithdrawPage } from './pages/WithdrawPage/Index';
import { ProofPage } from './pages/ProofPage/Index';
import { LiquidityPage } from './pages/LiquidityPage/Index';

function App() {

  return (
    <>
      <LoadingBar />
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/mint' element={<MintPage />} />
          <Route path='/withdrawals' element={<WithdrawPage />} />
          <Route path='/swap' element={<SwapPage />} />
          <Route path='/proof' element={<ProofPage />} />
          <Route path='/liquidity' element={<LiquidityPage />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App