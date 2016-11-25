import React, { Component } from 'react'
import { Match, Redirect } from 'react-router'
import WordCloudPreview from '../WordCloudPreview'
import WordCloudModal from '../WordCloudModal'
import './NewsWordCloudsList.css'

const API_GIT_URL = 'https://api.github.com/repos/inmagik/newswordclouds/contents/dailyclouds?ref=stock'
const RAW_GIT_URL = 'https://raw.githubusercontent.com/inmagik/newswordclouds/stock/dailyclouds'

const dataReducer = contents => contents.reduce((data, content) => ({
  ...data,
  [content.name]: content
}), {})

const loadWordClouds = () => fetch(API_GIT_URL)
  .then(response => response.json())
  // Map to word cloud object
  .then(contents => contents.map(({ name }) => ({
    name,
    image: `${RAW_GIT_URL}/${name}/newsimage.jpg`,
    txt: `${RAW_GIT_URL}/${name}/newstext.txt`
    // previewImage,
  }))
    // Fake word clouds...
    .concat([
      {
        name: 'GioVaahaha',
        image: 'https://scontent-mxp1-1.xx.fbcdn.net/t31.0-8/15000278_10209856039951648_8930327605559385382_o.jpg',
        txt: `${RAW_GIT_URL}/xxx/newstext.txt`
      },
      {
        name: 'GioVauwwuuw',
        image: 'https://scontent-mxp1-1.xx.fbcdn.net/t31.0-8/15000278_10209856039951648_8930327605559385382_o.jpg',
        txt: `${RAW_GIT_URL}/xxx/newstext.txt`
      },
      {
        name: 'GioVaxxx',
        image: 'https://scontent-mxp1-1.xx.fbcdn.net/t31.0-8/15000278_10209856039951648_8930327605559385382_o.jpg',
        txt: `${RAW_GIT_URL}/xxx/newstext.txt`
      },
      {
        name: 'GioVa',
        image: 'https://scontent-mxp1-1.xx.fbcdn.net/t31.0-8/15000278_10209856039951648_8930327605559385382_o.jpg',
        txt: `${RAW_GIT_URL}/xxx/newstext.txt`
      },
      {
        name: 'INGE',
        image: 'https://scontent-mxp1-1.xx.fbcdn.net/t31.0-8/15000278_10209856039951648_8930327605559385382_o.jpg',
        txt: `${RAW_GIT_URL}/xxx/newstext.txt`
      }
    ])
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
    loadWordClouds().then(wordClouds => this.setState({ wordClouds }))
  }

  getWordCloudsList = () => (this.state.wordClouds && (
    this.state.wordClouds.names.map(name => this.state.wordClouds.data[name])
  ))

  render() {
    const { pathname } = this.props
    const { wordClouds } = this.state
    const wordCloudsList = this.getWordCloudsList()

    return (
      <div className="NewsWordCloudsList">
        <Match pattern='wordclouds' render={({ pathname }) => (
          <Match pattern={`${pathname}/:wordCloud`} render={({ params }) => {
            // Wait word clouds to load...
            if (!wordClouds) {
              return null
            }

            // Invalid word cloud
            if (typeof wordClouds.data[params.wordCloud] === 'undefined') {
              console.log('FUck')
              return <Redirect to={{ pathname: '/' }} />
            }

            const wordCloud = wordClouds.data[params.wordCloud]

            // Calculate the next word cloud object
            const index = wordClouds.names.indexOf(params.wordCloud)
            const nextWordCloud = wordClouds.names.length > (index + 1)
              ? wordClouds.data[wordClouds.names[index + 1]]
              : null

            // Show modal Yeah!
            return <WordCloudModal
              wordCloud={wordCloud}
              nextWordCloud={nextWordCloud}
            />
          }} />
        )} />

        <div className="row">
          {wordCloudsList && wordCloudsList.map(wordCloud => (
            <div className="col-md-6" key={wordCloud.name}>
              <WordCloudPreview wordCloud={wordCloud} />
            </div>
          ))}
        </div>
      </div>
    )
  }
}
