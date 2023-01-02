import People_Card from "./People_Card";
let key_index = 0;

const People_List = (props) => {
    const filtered_array = props.array.map((element) => {
        return (
            <People_Card 
            key = {key_index++} 
            name = {element.name}
            />
        );
    })

    return(
        <div>
            {filtered_array}
        </div>
    )
}

export default People_List;