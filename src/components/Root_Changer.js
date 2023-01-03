import Settings from "../main/Settings";
import {Handle_Click, API_Handler_Master} from "../main/Handlers";

const Root_Changer = (props) => {
    const {appended_function} = props
    const results = Settings.API_Roots.map((element, index) => {
        return (
            <button 
            key = {index} 
            value = {element} 
            onClick = {(sender) => {Handle_Click(sender, appended_function);}}
            > 
            {element} 
            </button>
        )
    })

    return (<div className = "Root_Changer_Main"> {results} </div>)
}

export default Root_Changer;