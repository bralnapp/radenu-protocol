
import CoinbaseWalletSDK from '@coinbase/wallet-sdk'
import Web3 from 'web3'

const APP_NAME = 'Radenu'
const APP_LOGO_URL = 'https://ik.imagekit.io/braln/logo-transparent_9a46VRS7N.svg'
const DEFAULT_ETH_JSONRPC_URL = `https://eth-rinkeby.alchemyapi.io/v2/${process.env.REACT_APP_ALCHEMY_API_KEY}`;
const DEFAULT_CHAIN_ID = 1

// Initialize Coinbase Wallet SDK
export const coinbaseWallet = new CoinbaseWalletSDK({
  appName: APP_NAME,
  appLogoUrl: APP_LOGO_URL,
  darkMode: false
})

// Initialize a Web3 Provider object
export const ethereum = coinbaseWallet.makeWeb3Provider(DEFAULT_ETH_JSONRPC_URL, DEFAULT_CHAIN_ID)

// Initialize a Web3 object
export const web3 = new Web3(ethereum)