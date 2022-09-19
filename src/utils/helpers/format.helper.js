import { utils } from 'ethers'
import numeral from 'numeral'

const formatUnit = (value) => {
    if (!value) return
    return parseFloat(utils.formatEther(value))
}

const parseUnit = (value) => utils.parseEther(value.toString(), 'ether')

const convertToNumber = (item) => numeral(item).value()

const formatDate = (value) => {
    const _format = formatUnit(value) * 10 ** 18
    const date = new Date(_format)
    return date.toUTCString()
}

const formatDuration = (value) => {
    const _format = formatUnit(value) * 10 ** 18
    const date = new Date(_format)
    return date.getMinutes()
}
export {
    formatUnit,
    parseUnit,
    convertToNumber,
    formatDate,
    formatDuration,
}

