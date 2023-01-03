import Settings from "./Settings";

//API Fetch Process
const API_Handler = async (link) => {
    const start_fetch = await fetch(link);

    //Checking If Fetch Was Successfull
    if (start_fetch.ok) {
        const to_json = await start_fetch.json();
        return to_json;
    }
    else {
        throw Error("Something went wrong while fetching API.")
    }
} 

//Fetching API With Root Name 
//(SWAPI Default Data Index: results)
const Use_API = async (root_name, appended_functions, get_value_from = "results") => {
    appended_functions[1](true);
    const result = await API_Handler(Settings.Base_API_Root + "/" + root_name);

    //Checking If Function Exists
    if (appended_functions[0] != null) {
        appended_functions[0](result[get_value_from])
        appended_functions[1](false);
    }
    else {
        appended_functions[1](false);
        return result;
    }
}

//Fetching API Then Looking For Index
const Use_API_and_Find = async (root_name, search_as, search_val) => {
    const result = await Use_API(root_name);
    if (Array.isArray(result)) {
        for (let i = 0; i < result.length; i++) {
            if (result[i][search_as] === search_val) {
                return result[i];
            }
        }
    }
    else {
        if (result[search_as] === search_val) {
            return result;
        }
    }
    return null;
}

//Handling Clicks With An Appended Function
const Handle_Click = (sender, appended_function) => {
    if (appended_function != null) {
        appended_function(sender.target.value);
    }
}

const Handle_Search_Change = (value, appended_function) => {
    if (appended_function != null) {
        appended_function(value)
    }
}

const Handle_Filtering = (array, search_as, search_val) => {
    if (search_val.trim().length === 0) {
        return array;
    }
    return array.filter((element) => {
        if (element[search_as].toLocaleLowerCase().includes(search_val)) {
            return element;
        }
    })
}

const Handle_Loading = (is_loading) => {
    if (is_loading) {return true;}
    return false;
}

export {
    Use_API, 
    Use_API_and_Find,
    Handle_Click,
    Handle_Search_Change,
    Handle_Filtering,
    Handle_Loading,
}