import React, {Component} from 'react'
import {Link, browserHistory} from 'react-router'
import {formatDate} from '../../util'
import './WordCloudModal.css'
import inmagik from '../Layout/Footer/inmagik_circle_shadow.png'
import logo from '../Layout/Header/DailyClouds-logo.png'

//import oldpaper from './old_paper.jpg'

// Key codes for moving modal
const LEFT = 37
const RIGHT = 39
const ESC = 27

export default class WordCloudModal extends Component {

    componentWillMount() {
        // Make background not scrollable
        const body = document.getElementsByTagName('body')[0]
        body.className += 'modal-open'
        // Add keydown event lister for interact with modal
        document.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount() {
        // Make background scrollable again
        const body = document.getElementsByTagName('body')[0]
        body.className = body.className.replace('modal-open', '')
        // Remove keydown event lister
        document.removeEventListener('keydown', this.handleKeyDown)
    }

    handleKeyDown = (e) => {
        if (e.keyCode === ESC) {
            browserHistory.push('/')
        } else if (this.props.prevWordCloud && e.keyCode === LEFT) {
            browserHistory.push(`/clouds/${this.props.prevWordCloud.name}`)
        } else if (this.props.nextWordCloud && e.keyCode === RIGHT) {
            browserHistory.push(`/clouds/${this.props.nextWordCloud.name}`)
        }
    }

    render() {
        const {wordCloud, prevWordCloud, nextWordCloud} = this.props
        return (
            <div className="WordCloudModal">
                <div className="WordCloudModal-content">
                    <img src={inmagik} className="ModalLogo-inmagik pull-left"/> {/*<h5 className="ModalDate pull-left"><i className="fa fa-file-text"/> {formatDate(wordCloud.date)}</h5>*/}
                    <img src={logo} className="ModalLogo-DailyClouds pull-left"/>
                    <h3 className="CloseButton"><Link to='/'><i className="fa fa-close"/></Link></h3>
                    <h3 className="ModalTitle">{formatDate(wordCloud.date)}</h3>
                    <img width="100%" src={wordCloud.image} className="Modal-image"/> {prevWordCloud && <Link className="WordCloudModal-arrow-left" to={`/clouds/${prevWordCloud.name}`}>
                        <h3><i className="fa fa-chevron-left"/></h3>
                    </Link>}
                    {nextWordCloud && <Link className="WordCloudModal-arrow-right" to={`/clouds/${nextWordCloud.name}`}>
                        <h3><i className="fa fa-chevron-right"/></h3>
                    </Link>}
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
