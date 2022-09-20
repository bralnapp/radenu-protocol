import { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'
import Sidebar from './Sidebar'
import { dashboardNavLinks } from 'src/utils/data/data.dashboardNavLinks'
import { Link } from 'react-router-dom'
import Button from 'src/modules/common/components/Button'
import ConnectWalletModal from 'src/modules/common/modal/ConnectWalletModal'
import { formatWalletAddress } from 'src/utils/helpers/wallet.helpers'
import { useContractContext } from 'src/context/ContractContext'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showConnectWalletModal, setShowConnectWalletModal] = useState(false);

  const { account, isWalletConnected } = useContractContext()


  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleConnectWallet = () => {
    if (!isWalletConnected) {
      setShowConnectWalletModal(true)
    }
  }
  return (
    <>
      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        toggleMenu={toggleMenu}
      />
      <ConnectWalletModal
        showConnectWalletModal={showConnectWalletModal}
        setShowConnectWalletModal={setShowConnectWalletModal}
      />
      <nav className="fixed z-[50] bg-white  w-full">
        <p className="text-center text-[#191535] text-sm leading-[17px] py-3 bg-[#6EE3C0] md:text-base md:leading-[19px]">Warning : Ensure you switch to Evmos chain on your metamask wallet</p>
        <div className="flex items-center h-14">
          <div className="layout-container md:h-20 flex items-center justify-between">
            <div className="font-medium uppercase">Logo</div>
            <div className="hidden md:flex items-center space-x-8">
              <ul className='flex items-center space-x-8'>
                {
                  dashboardNavLinks.map((item, index) => (
                    <li key={index}>
                      <Link to={item.link} className={`capitalize text-base leading-[22px] font-medium ${index === 1 ? 'text-[#737374]' : 'text-primary-2'}`}>{item.name}</Link>
                    </li>
                  ))
                }
              </ul>
              <Button
                title={isWalletConnected ? formatWalletAddress(account) : "connect wallet"}
                className="w-32 h-8"
                onClick={handleConnectWallet}
              />
            </div>
            <div onClick={toggleMenu} className="md:hidden cursor-pointer">
              <Bars3Icon className="h-6 w-6" />
            </div>
          </div>
        </div>

      </nav>
    </>
  );
}
