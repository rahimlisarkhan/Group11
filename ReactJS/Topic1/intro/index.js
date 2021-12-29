
class App extends React.Component {

    constructor(props) {
        super(props);
        
    }
    
    render() {
        let count = 8
        let qirmizi = true

        let sekilGoster = (sekilAdi) => {
            let Image
            if (sekilAdi === "gul") {
                 Image = <img width="200" src="https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg" />
            }else if(sekilAdi === "masin"){
                Image = <img width="200" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-honda-civic-sedan-1558453497.jpg?crop=1xw:0.9997727789138833xh;center,top&resize=480:*" />
            }else{
                Image = <img width="200" src="https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101028/112815904-no-image-available-icon-flat-vector-illustration.jpg?ver=6" />
            }

            return Image
        }

        let deyerOtur = () => {
            return <p>15dsdsds</p>
        }

        return (
            <div >
                {this.props.children}
                <Box/>
                <Box/>
                <Box/>
                <Box/>
                <Box/>
                <h1 className={qirmizi ? "red" : "yellow"}>Salam ReactJS...</h1>
                <h5>{count}</h5>
                <h1>{deyerOtur()}</h1>
                {sekilGoster("gul")}
            </div>
        )
    }

}


ReactDOM.render(<App>
    <p>Test</p>
    <p>Test</p>
    <p>Test</p>
    </App>,
    document.getElementById('root'))
