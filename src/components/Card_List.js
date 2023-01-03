import Card_Format from "./Card_Format";

const People_List = (props) => {
    const filtered_array = props.array.map((element, element_index) => {
        return (
            <Card_Format 
            key = {element_index} 
            object = {element}
            />
        );
    })

    return(
        <div className = "People_List">
            {filtered_array}
        </div>
    )
} 


export default People_List;