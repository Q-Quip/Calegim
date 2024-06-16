import React from 'react'
import Main from './pages/Main'
import PaymentPage from './pages/paymentPage/PaymentPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WithHeader from './components/ui/routerPreset/WithHeader';

const App: React.FC = () => {
    return(
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<WithHeader>
                        <Main/>
                    </WithHeader>}/>
                    <Route path='/payment' element={<PaymentPage />} />
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    )
}

export default App;