//Common Stuff
import {useState, useEffect} from 'react';
import "./App.css";

//Importing Main Stuff
import Settings from '../main/Settings';
import Loading from './Loading';
import Root_Changer from './Root_Changer';
import Card_List from './Card_List';
import Searchbox from './Searchbox';

//Handler Module
import {
  Use_API,
  Handle_Loading, 
  Handle_Filtering,
} from "../main/Handlers"

function App() {
  //Hooks 
  const [current_page, set_current_page] = useState(Settings.Default_Page);
  const [current_array, set_current_array] = useState([]);
  const [filtered_array, set_filtered_array] = useState([])
  const [is_loading, set_is_loading] = useState(true);
  const [current_search, set_current_search] = useState("");

  //useEffects (Handler Module Keeps Code Clean :-))
  useEffect(() => {Use_API(Settings.Base_API_Root + "/" + current_page, [set_current_array, set_is_loading])}, [current_page])
  useEffect(() => {set_filtered_array(Handle_Filtering(current_array, "name", current_search))}, [current_search, current_array])

  // [Pages]
  
  //Loading Page
  if (current_array.length <= 0 || Handle_Loading(is_loading)) {return(<Loading/>)}

  //Casual Cards
  else {
    return (
      <div className = "Main_Div">
        <h1> STARWARS API </h1>
        <Searchbox appended_function = {set_current_search}/>
        <Root_Changer appended_function = {set_current_page}/>
        <Card_List current_page = {current_page} array = {filtered_array}/>
      </div>
    );
  }
}

export default App;
