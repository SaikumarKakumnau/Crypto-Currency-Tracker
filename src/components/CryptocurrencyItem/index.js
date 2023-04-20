// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoDetails} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = cryptoDetails

  return (
    <div className="crypto-item">
      <div className="image-heading-container">
        <img src={currencyLogo} alt={currencyName} className="image" />
        <p>{currencyName}</p>
      </div>
      <div className="values-container">
        <p>{usdValue}</p>
        <p>{euroValue}</p>
      </div>
    </div>
  )
}

export default CryptocurrencyItem
