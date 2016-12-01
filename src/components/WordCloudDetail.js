import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import WordCloudModal from './WordCloudModal'

export default class WordCloudDetail extends Component {
  componentWillMount() {
    this.redirectWhenNotFound(this.props.params.wordCloud)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params.wordCloud !== this.props.wordCloud) {
      this.redirectWhenNotFound(nextProps.params.wordCloud)
    }
  }

  redirectWhenNotFound(wordCloudName) {
    if (typeof this.props.wordClouds.data[wordCloudName] === 'undefined') {
      browserHistory.replace('/')
    }
  }

  render() {
    const { wordClouds, params } = this.props

    // Invalid word cloud, do nothing
    if (typeof wordClouds.data[params.wordCloud] === 'undefined') {
      return null
    }

    const wordCloud = wordClouds.data[params.wordCloud]

    // Calculate the next word cloud object
    const index = wordClouds.names.indexOf(params.wordCloud)
    const prevWordCloud = index > 0
      ? wordClouds.data[wordClouds.names[index - 1]]
      : null
    const nextWordCloud = wordClouds.names.length > (index + 1)
      ? wordClouds.data[wordClouds.names[index + 1]]
      : null

    // Show modal Yeah!
    return <WordCloudModal
      wordCloud={wordCloud}
      prevWordCloud={prevWordCloud}
      nextWordCloud={nextWordCloud}
    />
  }
}
