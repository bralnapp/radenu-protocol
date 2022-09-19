import React, { useState } from 'react'
import DashboadLayout from '../dashboard/components/layout'
import RecentTransactions from './components/RecentTransactions';
import SendMoney from './components/sendMoney';
import UserBalance from './components/UserBalance';

const ExchangePage = () => {
    const [balance, setBalance] = useState()
    const [orderList, setOrderList] = useState([])

    return (
        <DashboadLayout>
            <div className="layout-container md:grid md:grid-cols-2 lg:grid-cols-[2fr_1fr] gap-x-5 lg:gap-x-[60px]">
                <div>
                    <UserBalance
                        balance={balance}
                        setBalance={setBalance}
                    />
                    <RecentTransactions
                        orderList={orderList}
                        setOrderList={setOrderList}
                    />
                </div>
                <div>
                    <SendMoney
                        setBalance={setBalance}
                        setOrderList={setOrderList}
                    />
                </div>
            </div>
        </DashboadLayout>
    );
}

export default ExchangePage