import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import './WordCloudPreview.css'

export const WordCloudPreview = ({ wordCloud }) => (
  <div className="WordCloudPreview">
    <Link to={`/wordclouds/${wordCloud.name}`}>
      <img src={wordCloud.image} />
    </Link>
    <div>
      <i className="ion-md-battery-full" />
      <div>{wordCloud.name}</div>
      <div><a href={wordCloud.txt}>txt</a></div>
    </div>
  </div>
)

export default WordCloudPreview
