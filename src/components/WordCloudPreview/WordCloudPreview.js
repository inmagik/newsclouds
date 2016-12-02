import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { formatDate } from '../../util'
import './WordCloudPreview.css'

export const WordCloudPreview = ({ wordCloud }) => (
  <div className="WordCloudPreview">
    <Link to={`/clouds/${wordCloud.name}`}>
      <img src={wordCloud.image} />
    </Link>
    <div className="WordCloudPreview-bottom-text">
      <div>{formatDate(wordCloud.date)}</div>
    </div>
  </div>
)

export default WordCloudPreview
