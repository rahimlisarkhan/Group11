import { withRouter } from "react-router-dom"



const Header = ({ history: { push } }) => {

    return (
        <ul>
            <li onClick={() => push("/")}>
                Home
            </li>
            <li onClick={() => push("/about")}>
                About
            </li>
        </ul>
    )
}


export default withRouter(Header)