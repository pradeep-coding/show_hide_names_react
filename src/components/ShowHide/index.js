import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    firstName: 'hide',
    lastName: 'hide',
  }

  firstName = () => {
    const {firstName} = this.state
    if (firstName === 'hide') {
      this.setState({firstName: 'show'})
    } else {
      this.setState({firstName: 'hide'})
    }
  }

  lastName = () => {
    const {lastName} = this.state
    if (lastName === 'hide') {
      this.setState({lastName: 'show'})
    } else {
      this.setState({lastName: 'hide'})
    }
  }

  render() {
    const {firstName, lastName} = this.state
    let firstNameStatus
    let lastNameStatus
    if (firstName === 'hide') {
      firstNameStatus = null
    } else {
      firstNameStatus = (
        <div className="first-last-container">
          <h1 className="name">Joe</h1>
        </div>
      )
    }
    if (lastName === 'hide') {
      lastNameStatus = null
    } else {
      lastNameStatus = (
        <div className="first-last-container">
          <h1 className="name">Jonas</h1>
        </div>
      )
    }

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Show/Hide</h1>
          <div className="names-container">
            <div className="name-container">
              <button type="button" className="button" onClick={this.firstName}>
                Show/Hide Firstname
              </button>
              {firstNameStatus}
            </div>
            <div className="name-container">
              <button type="button" className="button" onClick={this.lastName}>
                Show/Hide Lastname
              </button>
              {lastNameStatus}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
