import Settings from "./Settings";

//Simple API Fetch
const API_Handler = async (link) => {
    const start_fetch = await fetch(link);
    if (start_fetch.ok) {
        return await start_fetch.json();
    }
    else {
        throw new Error("Something went wrong while fetching API.")
    }
} 

//Fetching API With Secondary Root Name
const Use_API = async (root_name) => {
    return await API_Handler(Settings.Base_API_Root + "/" + root_name);
}

const Handle_Click = (sender, func) => {
    func(sender.target.value)
}

export {Use_API, Handle_Click}