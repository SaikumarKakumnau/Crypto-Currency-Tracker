// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {isLoading: true, cryptoCurrenciesData: []}

  componentDidMount() {
    this.getCryptoCurrenciesData()
  }

  getCryptoCurrenciesData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()

    const formattedData = data.map(item => ({
      currencyName: item.currency_name,
      usdValue: item.usd_value,
      euroValue: item.euro_value,
      id: item.id,
      currencyLogo: item.currency_logo,
    }))

    this.setState({cryptoCurrenciesData: formattedData, isLoading: false})
  }

  render() {
    const {isLoading, cryptoCurrenciesData} = this.state

    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <ul className="crypto-currency-list-container">
            <li className="list-item">
              <div className="heading-image-container">
                <h1 className="main-heading">Cryptocurrency Tracker</h1>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
                  alt="cryptocurrency"
                  className="logo"
                />
              </div>
            </li>
            <li className="crypto-container">
              <navbar className="nav-bar">
                <div className="coin-type-container">
                  <p className="coin-type">Coin Type</p>
                </div>
                <div className="value-container">
                  <p className="value-usd">USD</p>
                  <p className="value-euro">EURO</p>
                </div>
              </navbar>
              <div className="currency-item-container">
                {cryptoCurrenciesData.map(eachItem => (
                  <CryptocurrencyItem
                    key={eachItem.id}
                    cryptoDetails={eachItem}
                  />
                ))}
              </div>
            </li>
          </ul>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
