import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ExchangePage from 'src/modules/exchangePage';
import ExchangeTransactionPage from 'src/modules/exchangePage/[id]';
import LandingPage from 'src/modules/landingPage';
import OrderPage from 'src/modules/orderPage';
import OrderTransactionPage from 'src/modules/orderPage/[id]';

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/exchange" element={<ExchangePage />} />
				<Route path="/exchange/:id" element={<ExchangeTransactionPage />} />
				<Route path="/orders" element={<OrderPage />} />
				<Route path='/orders/:id' element={<OrderTransactionPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default AppRouter