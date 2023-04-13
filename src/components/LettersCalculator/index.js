import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: ''}

  onChange = text => {
    this.setState({count: text.target.value})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="card">
            <h1 className="title">Calculate the Letters you enter</h1>
            <label className="label" htmlFor="input">
              {' '}
              Enter the Phrase{' '}
            </label>
            <input
              type="text"
              placeholder="Enter the Phrase"
              id="input"
              className="input"
              onChange={this.onChange}
            />
            <div className="count-card">
              <p className="para"> No.of letters: {count.length} </p>
            </div>
          </div>
          <img
            className="img"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
