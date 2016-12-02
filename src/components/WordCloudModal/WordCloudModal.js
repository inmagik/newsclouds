import React, {Component} from 'react'
import {Link} from 'react-router'
import {makeCancelable, formatDate} from '../../util'
import './WordCloudModal.css'
import inmagik from '../Layout/Footer/inmagik_circle_shadow.png'
//import oldpaper from './old_paper.jpg'

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
            this.setState({
                text: null
            }, () => this.loadText(nextProps.wordCloud.txt))
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
        this.cancelableLoadText.promise.then(text => this.setState({text}))
    }

    render() {
        const {wordCloud, prevWordCloud, nextWordCloud} = this.props
        const {text} = this.state
        return (
            <div className="WordCloudModal">
                {prevWordCloud && <Link className="WordCloudModal-arrow-left" to={`/clouds/${prevWordCloud.name}`}>
                    <h3><i className="fa fa-chevron-left"/></h3>
                </Link>}
                {nextWordCloud && <Link className="WordCloudModal-arrow-right" to={`/clouds/${nextWordCloud.name}`}>
                    <h3><i className="fa fa-chevron-right"/></h3>
                </Link>}
                <div className="WordCloudModal-content">
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
