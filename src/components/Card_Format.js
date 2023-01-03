const Card_Format = (props) => {
    const {name, height} = props.object
    
    return (
        <div className = "People_Card">
            <h2> {name} </h2>
            {"Boy: " + height}
        </div>
    )
}

export default Card_Format