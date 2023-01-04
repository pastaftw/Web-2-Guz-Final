import Settings from "../main/Settings";
import {Handle_Click} from "../main/Handlers";

const Root_Changer = (props) => {
    const {appended_function, selected} = props
    const results = Settings.API_Roots.map((element, index) => {
        //Selected Root Design
        if (element === selected) {
            return (
                <button 
                key = {index} 
                value = {element} 
                className = "Root_Changer_Selected"
                onClick = {(sender) => {Handle_Click(sender, appended_function);}}
                > 
                {element} 
                </button>
            )
        }

        //Common Root Design
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

    //Final
    return (
        <div className = "Root_Changer_Main"> 
        {results} 
        </div>
    )
}

export default Root_Changer;