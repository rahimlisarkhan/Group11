

class Button extends React.Component{
    static defaultProps = {
        bg:"green",
    }

    constructor(props){
        super(props);
    }
    
    render() {
        console.log(this.props);
        let {color,bg, children} = this.props

        const inlineStyle = {
            padding: "15px",
            fontSize: "18px",
            backgroundColor:bg,
            color:color,
            border:"0",
            borderRadius:"20px"
        }
        
        return (
            <button style={inlineStyle}> {children}</button>
        )
    }
}

// Button.propTypes = {
//     color:PropTypes.string.isRequired,
// }