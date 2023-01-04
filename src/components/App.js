//Common Stuff
import {useState, useEffect} from 'react';
import "./App.css";

//Importing Main Stuff
import Settings from '../main/Settings';
import Loading from './Loading';
import Top_Side from './Top_Side';
import Root_Changer from './Root_Changer';
import Card_List from './Card_List';
import Searchbox from './Searchbox';

//Handler Module
import {
  Use_API,
  Handle_Loading, 
  Handle_Filtering,
} from "../main/Handlers"

 const App = () => {
  //Hooks 
  const [current_page, set_current_page] = useState(Settings.Default_Page);
  const [current_array, set_current_array] = useState([]);
  const [filtered_array, set_filtered_array] = useState([])
  const [is_loading, set_is_loading] = useState(true);
  const [current_search, set_current_search] = useState("");

  //useEffects (Handler Module Keeps Code Clean :-))
  useEffect(() => {Use_API(Settings.Base_API_Root + "/" + current_page, [set_current_array, set_is_loading])}, [current_page])
  useEffect(() => {Handle_Filtering([current_array, current_page, current_search], set_filtered_array)}, [current_search, current_array])

  // [Pages]
  
  //Loading Page
  if (current_array.length <= 0 || Handle_Loading(is_loading)) {
    return(
      <main className = "Main_Div">
          <Top_Side title = {Settings.Default_Title}/>
          <Searchbox appended_function = {set_current_search}/>
          <Loading/>
      </main>
    )
  }

  //Casual Cards
  else {
    return (
      <main className = "Main_Div">
        <Top_Side title = {Settings.Default_Title}/>
        <Searchbox appended_function = {set_current_search}/>
        <Root_Changer appended_function = {set_current_page} selected = {current_page}/>
        <Card_List current_page = {current_page} array = {filtered_array}/>
      </main>
    );
  }
}

export default App;
