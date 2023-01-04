import Card_Format from "./Card_Format";

const Card_List = (props) => {
    const filtered_array = props.array.map((element, element_index) => {
        return (
            <Card_Format 
            key = {element_index} 
            current_page = {props.current_page}
            object = {element}
            />
        );
    })

    return(
        <div className = "Card_List">
            {filtered_array}
        </div>
    )
} 


export default Card_List;