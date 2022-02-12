import { Component, Fragment } from "react"
import Style from './Slider.module.css'
import { PropTypes } from 'prop-types';

export class Slider extends Component {


    constructor(props){

        super(props)
        
        this.slidePrev = this.slidePrev.bind(this)
        this.slideNext = this.slideNext.bind(this)
        this.darkMode = this.darkMode.bind(this)
        
        this.state={
            slide_count:4,
            mode:false
        }

    }


    slidePrev(e){
        console.log(e);

        const {slide_count} = this.state

        let lastPrev = slide_count

        this.setState({slide_count:lastPrev <= 1 ? 1 : lastPrev - 1})
    }

    slideNext(e){
        let dynamicImageCount = Object.keys(this.props.slideData).length

        const {slide_count} = this.state

        let lastPrev = slide_count

        this.setState({slide_count:lastPrev >= dynamicImageCount ? dynamicImageCount : lastPrev + 1})
    }

    darkMode(){
        this.setState({mode:!this.state.mode})
    }

    render() {
        let dynamicImageCount = Object.keys(this.props.slideData).length

        const {slide_count,mode} = this.state

        return (
            <Fragment>
                <div className={`${Style.sliderContent} ${mode && Style.sliderContentDark}`}>
                    <img src={this.props.slideData[`image${slide_count}`]} alt="" />
                    <div className={Style.buttonGroup }>
                       {slide_count > 1 && <button onClick={this.slidePrev} className={Style.sliderButton}>pre</button> }
                        <button onClick={this.darkMode} className={`${Style.sliderButton} ${Style.sliderMode}`}>mode</button>
                        {slide_count < dynamicImageCount && <button onClick={this.slideNext} className={Style.sliderButton}>next</button> }
                    </div>
                </div>
            </Fragment>
        )
    }
}

Slider.propTypes = {
    slideData:PropTypes.object.isRequired
}