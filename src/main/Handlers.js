//Appended Function Handler
const Appended_Function_Handler = (callback, value) => {
    if (callback != null) {
        callback(value);
        return true; //Function Run
    }
    return false; //Function Did Not Run
}

//API Fetch Process
const Single_API_Handler = async (url) => {
    const start_fetch = await fetch(url);

    //Checking If Fetch Was Successfull
    if (start_fetch.ok) {return await start_fetch.json();}
    else {console.error("Single_API_Fetch_Fail")}
} 

//Multiple API Fetch Process
const Multiple_API_Handler = async (urls) => {
    const start_multiple_fetch = await Promise.all(urls.map(
        async (url) => {
            const start_fetch = await fetch(url)
            if (!start_fetch.ok) {console.error("Multiple_API_Fetch_Fail");}
            return start_fetch;
        }
    ));

    return start_multiple_fetch.map(async (fetch) => {
        return await fetch.json()
    })
}

//Multiple API Fetch Process
const API_Handler = async (unk_urls) => {
    try {
        if (Array.isArray(unk_urls) && unk_urls.length == 0) {return null;}
        else if (Array.isArray(unk_urls) && unk_urls.length > 1) {return await Multiple_API_Handler(unk_urls)}
        else if (Array.isArray(unk_urls) && unk_urls.length == 1) {return await Single_API_Handler(unk_urls[0])}
        else {return await Single_API_Handler(unk_urls)}
    }
    catch(error) {throw Error("Handlers.js ->" + error)}
}

//Fetching API With Root Name 
//(SWAPI Default Data Index: results)
const Use_API = async (url, appended_functions, last_results = []) => {
    appended_functions[1](true);
    const result = await API_Handler(url);
    const new_array = last_results.length == 0 ? [].concat(result["results"]) : [].concat(result["results"], last_results)

    if (result["next"] != null) {
        await Use_API(result["next"], appended_functions, new_array)
    }
    else {
        Appended_Function_Handler(appended_functions[0], new_array)
        Appended_Function_Handler(appended_functions[1], false)
    }
}

//Handling Clicks With An Appended Function
const Handle_Click = (sender, appended_function) => {
    Appended_Function_Handler(appended_function, sender.target.value);
}

//Handling Search With An Appended Function
const Handle_Search_Change = (value, appended_function) => {
    Appended_Function_Handler(appended_function, value)
}

//Handling Filtering
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

//Handling Loading Status
const Handle_Loading = (is_loading) => {
    if (is_loading) {return true;}
    return false;
}

//Exporting Functions
export {
    API_Handler,
    Use_API,
    Handle_Click,
    Handle_Search_Change,
    Handle_Filtering,
    Handle_Loading,
}