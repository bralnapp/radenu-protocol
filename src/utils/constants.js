import RadenuContractAbi from "src/utils/Radenu.json"
import RadenuTokenContractAbi from "src/utils/Token.json"

const RadenuContractAddress = "0x40fb4204dDe488f34b9d9E0056d0FE8f6ab38585"
const RadenuTokenContractAddress = "0x55d37DB5Ce7b2bE7f05DA00fF30A9e1c8f5D8437"
const exchangeRate = 700
const orderState = ['INITIATED', 'ACCEPTED', 'COMPLETED', 'FUFILLED', 'CANCELLED', 'INDISPUTE']


export {
    RadenuContractAddress,
    RadenuTokenContractAddress,
    RadenuContractAbi,
    RadenuTokenContractAbi,
    exchangeRate,
    orderState
}
