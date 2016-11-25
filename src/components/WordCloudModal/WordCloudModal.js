import React, { Component } from 'react'
import { Link } from 'react-router'
import { makeCancelable } from '../../util'
import './WordCloudModal.css'

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
          <div className="clearfix">
            <Link to='/'><i className="fa fa-close" /></Link>
            {nextWordCloud && <Link className="pull-right" to={`/wordclouds/${nextWordCloud.name}`}>
              <h3><i className="fa fa-arrow-right" /></h3>
            </Link>}
            {prevWordCloud && <Link className="pull-left" to={`/wordclouds/${prevWordCloud.name}`}>
              <h3><i className="fa fa-arrow-left" /></h3>
            </Link>}
          </div>
          <img height="600px" src={wordCloud.image} />
          {text && <div>{text}</div>}
        </div>
      </div>
    )
  }
}
