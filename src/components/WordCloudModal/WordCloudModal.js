import React, { Component } from 'react'
import { Link } from 'react-router'
import { makeCancelable } from '../../util'
import './WordCloudModal.css'
import inmagik from '../Layout/Footer/inmagik_circle_shadow.png'


export default class WordCloudModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: null
    }
  }

  componentWillMount() {
    // Load text
    this.loadText(this.props.wordCloud.txt)
  }

  componentWillReceiveProps(nextProps) {
    // Name changed load new related text
    if (nextProps.wordCloud.name !== this.props.wordCloud.name) {
      this.setState({ text: null }, () => this.loadText(nextProps.wordCloud.txt))
    }
  }

  componentWillUnmount() {
    // Cancel loading text task
    this.cancelableLoadText.cancel()
  }

  loadText(txt) {
    // Cancel previous task and start loading text
    if (this.cancelableLoadText) {
      this.cancelableLoadText.cancel()
    }
    this.cancelableLoadText = makeCancelable(fetch(txt).then(response => response.text()))
    this.cancelableLoadText.promise.then(text => this.setState({ text }))
  }

  render() {
    const { wordCloud, prevWordCloud, nextWordCloud } = this.props
    const { text } = this.state
    return (
      <div className="WordCloudModal">
        <div className="WordCloudModal-content">
          <div className="row head">
            <img src={inmagik} className="Logo col-md-1"/>
            <div className="SocialButtons2 col-md-10">
              <button><i className="fa fa-twitter" /></button>
              <button><i className="fa fa-facebook" /></button>
              <button><i className="fa fa-cloud-download" /></button>
            </div>
            <Link to='/'><h5 className="CloseButton col-md-1"><i className="fa fa-close" /></h5></Link>
          </div>
          <div className="clearfix">
            <h1 className="ModalTitle">The Daily Clouds</h1>
          </div>
          <div className="clearfix">
          <h5 className="ModalDate"><i className="fa fa-file-text" /> 26 Novembre 2016</h5>
          </div>
          {prevWordCloud && <Link className="arrow-left" to={`/clouds/${prevWordCloud.name}`}>
            <h3><i className="fa fa-arrow-left" /></h3>
          </Link>}
          {nextWordCloud && <Link className="arrow-right" to={`/clouds/${nextWordCloud.name}`}>
            <h3><i className="fa fa-arrow-right" /></h3>
          </Link>}
          <div className="WordCloudModal-image">
            <img height="400px" src={wordCloud.image} />
          </div>
          {/*<div className="WordCloudModal-text">
            <h4 className="WordCloudModal-text-title">text <i className="fa fa-file-text" /></h4>
            <div className="WordCloudModal-text-content">
            {text && <div>{text}</div>}
            </div>
          </div> */}
            {/*<div className="ImageSources">
            <h4>Fonti dell'immagine:</h4>
            <ul>
              <li>la Repubblica</li>
              <li>Corriere della Sera</li>
              <li>il Fatto Quotidiano</li>
              <li>ANSA</li>
              <li>La Stampa</li>
              <li>Il Mattino</li>
              <li>Il Messaggero</li>
              <li>il Giornale</li>
              <li>Libero</li>
              <li>Italia Oggi</li>
              <li>Il Gazzettino</li>
              <li>Il Secolo XIX</li>
              <li>Il Sole 24 ORE</li>
              <li>IL FOGLIO</li>
            </ul>
          </div> */}
          <div className="SocialButtons">
            <button><i className="fa fa-twitter" /></button>
            <button><i className="fa fa-facebook" /></button>
            <button><i className="fa fa-cloud-download" /></button>
          </div>
        </div>
      </div>
    )
  }
}
