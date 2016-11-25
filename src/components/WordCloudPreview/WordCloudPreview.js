import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import './WordCloudPreview.css'

export const WordCloudPreview = ({ wordCloud }) => (
  <div className="WordCloudPreview">
    <Link to={`/wordclouds/${wordCloud.name}`}>
      <img src={wordCloud.image} />
    </Link>
    <div>
      <div>26 Novembre 2016</div>
      {/* <div>{wordCloud.name}</div>
      <div><a href={wordCloud.txt}>txt</a></div> */}
    </div>
  </div>
)

export default WordCloudPreview
