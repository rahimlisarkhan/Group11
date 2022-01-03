import React from 'react'
import style from './style.module.css'
import winnerImage from '../../image/realistic-golden-trophy-with-winner-ribbon-vector-25530820.jpg'
import loseImage from '../../image/you-lose-neon-signs-style-260nw-1567204210.jpg'
import PropTypes from 'prop-types';





class Winner extends React.Component {

    constructor(props){
        super(props)
   
    }

    // winnerUser(){
    //     let content
    //     if(this.props.number > 5){
    //         content = <div className={style.murad}>
    //         <img width="100" src={winnerImage} alt="winner"/>
    //         <h1>You Win</h1>
    //         <p>Point: {this.props.number}</p>
    //     </div>
    //     }else{
    //         content = <div className={style.murad}>
    //         <img width="100" src={loseImage} alt="winner"/>
    //         <h1>Oppps!</h1>
    //         <p>Point: {this.props.number}</p>
    //     </div>
    //     }
    //     return content
    // }

    render() {
        return(
            // this.winnerUser()
            this.props.number > 5 
                ? 
                <div className={style.murad}>
                <img width="100" src={winnerImage} alt="winner"/>
                <h1>You Win</h1>
                <p>Point: {this.props.number}</p>
                </div>
                :
                <div className={style.murad}>
                         <img width="100" src={loseImage} alt="winner"/>
                         <h1>Oppps!</h1>
                         <p>Point: {this.props.number}</p>
                </div>
        )
    }
}

export default Winner

Winner.propTypes = {
    number:PropTypes.number.isRequired,
}