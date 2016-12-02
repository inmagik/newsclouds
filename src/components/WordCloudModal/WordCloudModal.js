import React, {Component} from 'react'
import { Link } from 'react-router'
import { formatDate } from '../../util'
import './WordCloudModal.css'
import inmagik from '../Layout/Footer/inmagik_circle_shadow.png'
//import oldpaper from './old_paper.jpg'

export default class WordCloudModal extends Component {

  componentWillMount() {
    // Make background not scrollable
    const body = document.getElementsByTagName('body')[0]
    body.className += 'modal-open'
  }

  componentWillUnmount() {
    // Make background scrollable again
    const body = document.getElementsByTagName('body')[0]
    body.className = body.className.replace('modal-open', '')
  }

  render() {
    const { wordCloud, prevWordCloud, nextWordCloud } = this.props
    return (
      <div className="WordCloudModal">
      <div className="WordCloudModal-content">
          {prevWordCloud && <Link className="WordCloudModal-arrow-left" to={`/clouds/${prevWordCloud.name}`}>
              <h3><i className="fa fa-chevron-left"/></h3>
          </Link>}
          {nextWordCloud && <Link className="WordCloudModal-arrow-right" to={`/clouds/${nextWordCloud.name}`}>
              <h3><i className="fa fa-chevron-right"/></h3>
          </Link>}
              <div className="ModalHeader">
                  <div className="clearfix">
                      <img src={inmagik} className="WordCloudModal-Logo pull-left"/>
                      <h5 className="ModalDate pull-left"><i className="fa fa-file-text"/> {formatDate(wordCloud.date)}</h5>
                      <Link to='/'><i className="CloseButton pull-right fa fa-close"/></Link>
                  </div>
                  <div>
                      <h1 className="ModalTitle">The Daily Cloud</h1>
                  </div>
              </div>
              <div className="WordCloudModal-image">
                  <img width="100%" src={wordCloud.image}/>
              </div>
              <div className="SocialButtons">
                  <button><i className="fa fa-twitter"/></button>
                  <button><i className="fa fa-facebook"/></button>
                  <button><i className="fa fa-cloud-download"/></button>
              </div>
          </div>
      </div>
    )
  }
}
