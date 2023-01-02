import Settings from "../main/Settings";
import {Handle_Click} from "../main/Handlers";

const Root_Changer = (props) => {
    const {appended_function} = props

    const results = Settings.API_Roots.map((element, element_index) => {
        return (
            <button 
            key = {element_index} 
            value = {element} 
            onClick = {
                (sender) => {
                    console.log("clicked=?");
                    Handle_Click(sender, appended_function);
                }
            }> 
            {element} 
            </button>
        )
    })

    return (
        <div>
            {results}
        </div>
    )
}

export default Root_Changer;