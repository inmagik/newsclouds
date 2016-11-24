import React from 'react'
import { Link } from 'react-router'
import './WordCloudModal.css'

const WordCloudModal = ({ wordCloud, nextWordCloud }) => (
  <div className="WordCloudModal">
    <div className="WordCloudModal-content">
      <Link to='/'>
        <img height="600px" src={wordCloud.image} />
      </Link>
      {nextWordCloud && <Link to={`/wordclouds/${nextWordCloud.name}`}>~</Link>}
    </div>
  </div>
)

export default WordCloudModal
