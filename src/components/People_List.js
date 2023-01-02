import People_Card from "./People_Card";

const People_List = (props) => {
    const filtered_array = props.array.map((element, element_index) => {
        return (
            <People_Card 
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