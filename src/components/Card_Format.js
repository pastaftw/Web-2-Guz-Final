import Settings from "../main/Settings"

const Card_Format = (props) => {
    const {current_page, object} = props

    if (current_page === Settings.API_Roots[0]) {
        //Object Props
        const {name, 
            height,
            mass,
            hair_color,
            skin_color,
            eye_color,
            birth_year,
            gender,
        } = object

        //Design
        return (
            <div className = "Card_Format">
                <h2> {name} </h2>
                <p> {"Height: " + height} </p>
                <p> {"Mass: " + mass} </p>
                <p> {"Hair: " + hair_color} </p>
                <p> {"Skin: " + skin_color} </p>
                <p> {"Eye: " + eye_color} </p>
                <p> {"Birth Year: " + birth_year} </p>
                <p> {"Gender: " + gender} </p>
            </div>
        )
    }
    else if (current_page === Settings.API_Roots[1]) {
        //Object Props
        const {
            name, 
            rotation_period,
            orbital_period,
            diameter,
            climate,
            gravity,
            terrain,
            surface_water,
            population
        } = object

        //Design
        return (
            <div className = "Card_Format">
                <h2> {name} </h2>
                <p> {"Rotation Period: " + rotation_period} </p>
                <p> {"Orbital Period: " + orbital_period} </p>
                <p> {"Diameter: " + diameter} </p>
                <p> {"Climate: " + climate} </p>
                <p> {"Gravity: " + gravity} </p>
                <p> {"Terrain: " + terrain} </p>
                <p> {"Surface Water: " + surface_water} </p>
                <p> {"Population: " + population} </p>
            </div>
        )
    }
    else if (current_page === Settings.API_Roots[2]) {
        //Object Props
        const {
            title,
            episode_id,
            opening_crawl,
            director,
            producer,
            release_date,
        } = object

        //Design
        return (
            <div className = "Card_Format">
                 <h2> {title} </h2>
                 <p> {"Episode: " + episode_id} </p>
                 <p> {"Opening Crawl: " + opening_crawl} </p>
                 <p> {"Director: " + director} </p>
                 <p> {"Producer: " + producer} </p>
                 <p> {"Release Date: " + release_date} </p>
            </div>
        )
    }
    else if (current_page === Settings.API_Roots[3]) {
        //Object Props
        const {
            name,
            classification,
            designation,
            average_height,
            skin_colors,
            hair_colors,
            eye_colors,
            average_lifespan,
            language,
        } = object

        //Design
        return (
            <div className = "Card_Format">
                <h2> {name} </h2>
                <p> {"Classification: " + classification} </p>
                <p> {"Designation: " + designation} </p>
                <p> {"Avarage Height: " + average_height} </p>
                <p> {"Skin Colors: " + skin_colors} </p>
                <p> {"Hair Colors: " + hair_colors} </p>
                <p> {"Eye Colors: " + eye_colors} </p>
                <p> {"Average Lifespan: " + average_lifespan} </p>
                <p> {"Language: " + language} </p>
            </div>
        )
    }
    else if (current_page === Settings.API_Roots[4]) {
        //Object Props
        const {
            name,
            model,
            manufacturer,
            cost_in_credits,
            length,
            max_atmosphering_speed,
            crew,
            passengers,
            cargo_capacity,
            consumables,
            vehicle_class,
        } = object

        //Design
        return (
            <div className = "Card_Format">
                <h2> {name} </h2>
                <p> {"Model: " + model} </p>
                <p> {"Manufacturer: " + manufacturer} </p>
                <p> {"Cost: " + cost_in_credits} </p>
                <p> {"Length: " + length} </p>
                <p> {"Max Atmosphering Speed: " + max_atmosphering_speed} </p>
                <p> {"Crew: " + crew} </p>
                <p> {"Passangers: " + passengers} </p>
                <p> {"Cargo Capacity: " + cargo_capacity} </p>
                <p> {"Consumables: " + consumables} </p>
                <p> {"Vehicle Class: " + vehicle_class} </p>
            </div>
        )
    }
    else if (current_page === Settings.API_Roots[5]) {
        //Object Props
        const {
            name,
            model,
            manufacturer,
            cost_in_credits,
            length,
            max_atmosphering_speed,
            crew,
            passengers,
            cargo_capacity,
            consumables,
            hyperdrive_rating,
            MGLT,
            starship_class,
        } = object

        //Design
        return (
            <div className = "Card_Format">
                <h2> {name} </h2>
                <p> {"Model: " + model} </p>
                <p> {"Manufacturer: " + manufacturer} </p>
                <p> {"Cost: " + cost_in_credits} </p>
                <p> {"Length: " + length} </p>
                <p> {"Max Atmosphering Speed: " + max_atmosphering_speed} </p>
                <p> {"Crew: " + crew} </p>
                <p> {"Passangers: " + passengers} </p>
                <p> {"Cargo Capacity: " + cargo_capacity} </p>
                <p> {"Consumables: " + consumables} </p>
                <p> {"Hyperdrive Rating: " + hyperdrive_rating} </p>
                <p> {"MGLT: " + MGLT} </p>
                <p> {"Starship Class: " + starship_class} </p>
            </div>
        )
    }
}

export default Card_Format