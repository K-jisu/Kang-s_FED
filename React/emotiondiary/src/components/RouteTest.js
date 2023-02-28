import { Link } from "react-router-dom"

const RouteTest = () =>{
    return <>
    <Link to={'/'}>Home</Link>
    <br></br>
    <Link to={'/Diary'}>Diary</Link>
    <br/>
    <Link to={'/New'}>New</Link>
    <br/>
    <Link to={'/Edit'}>Edit</Link>
    <br/>
    
    </>
}

export default RouteTest