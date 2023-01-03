import {Handle_Search_Change} from "../main/Handlers"

const Searchbox = (props) => {
    const {appended_function} = props
    return (<input type="search" onChange = {(sender) => {Handle_Search_Change(sender.target.value, appended_function)}} className = "Searchbox" placeholder="Ara..."></input>)
}

export default Searchbox