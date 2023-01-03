import Settings from "../main/Settings"

const Card_Format = (props) => {
    const current_page = props.current_page
    const object = props.object
    console.log(current_page)

    if (current_page == Settings.API_Roots[0]) {
        const {name, 
            height,
            mass,
            hair_color,
            skin_color,
            eye_color,
            birth_year,
            gender,
        } = object

        return (
            <div className = "Card_Format">
                <h1> {name}  </h1>
            </div>
        )
    }
    else if (current_page == Settings.API_Roots[1]) {
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
        return (
            <div className = "Card_Format">
                <h1> {name} </h1>
            </div>
        )

    }
    else if (current_page == Settings.API_Roots[2]) {
        const {
            title,
            episode_id,
            opening_crawl,
            director,
            producer,
            release_date,
        } = object
        return (
            <div className = "Card_Format">
                 <h1> {title} </h1>
            </div>
        )
    }
    else if (current_page == Settings.API_Roots[3]) {
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
        return (
            <div className = "Card_Format">
                <h1> {name} </h1>
            </div>
        )
    }
    else if (current_page == Settings.API_Roots[4]) {
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
        return (
            <div className = "Card_Format">
                <h1> {name} </h1>
            </div>
        )
    }
    else if (current_page == Settings.API_Roots[5]) {
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

        return (
            <div className = "Card_Format">
                <h1> {name} </h1>
            </div>
        )
    }
}

export default Card_Format