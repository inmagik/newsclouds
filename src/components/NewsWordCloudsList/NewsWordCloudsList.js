import React, { Component } from 'react'
import WordCloudPreview from '../WordCloudPreview'
import { makeCancelable } from '../../util'
import moment from 'moment'
import './NewsWordCloudsList.css'

const API_URL = 'https://api.github.com/repos/inmagik/newsclouds-stock/contents'
const CONTENT_URL = 'https://inmagik.github.io/newsclouds-stock'

const dataReducer = contents => contents.reduce((data, content) => ({
  ...data,
  [content.name]: content
}), {})

const loadWordClouds = () => fetch(API_URL)
  .then(response => response.json())
  .then(contents => contents
    // From newest to oldest
    .sort((a, b) => Number(b.name) - Number(a.name))
    // Map to word cloud object
    .map(({ name }) => ({
      name,
      date: moment(name, 'YYYYMMDD'),
      image: `${CONTENT_URL}/${name}/${name}.image.png`,
      txt: `${CONTENT_URL}/${name}/newstext.txt`
      // previewImage,
    }))
  )
  // Flatty data structure
  .then(contents => ({
    data: dataReducer(contents),
    names: contents.map(({ name }) => name)
  }))

export default class NewsWordCloudsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      wordClouds: null
    }
  }

  componentWillMount() {
    this.cancelableLoadWordClouds = makeCancelable(loadWordClouds())
    this.cancelableLoadWordClouds.promise.then(wordClouds => this.setState({ wordClouds }))
  }

  componentWillUnmount() {
    this.cancelableLoadWordClouds.cancel()
  }

  getWordCloudsList = () => (this.state.wordClouds && (
    this.state.wordClouds.names.map(name => this.state.wordClouds.data[name])
  ))

  render() {
    const { params, children } = this.props
    const { wordClouds } = this.state
    const wordCloudsList = this.getWordCloudsList()

    return (
      <div className="NewsWordCloudsList">
        {(wordClouds && children) && React.cloneElement(children, { wordClouds })}

        <div className="row">
          {wordCloudsList && wordCloudsList.map(wordCloud => (
            <div className="col-sm-6" key={wordCloud.name}>
              <WordCloudPreview wordCloud={wordCloud} />
            </div>
          ))}
        </div>
      </div>
    )
  }
}
