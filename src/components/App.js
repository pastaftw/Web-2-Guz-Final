//Common Stuff
import {useState, useEffect} from 'react';
import './App.css';

//Importing Handlers Module
import Settings from '../main/Settings';
import {Use_API} from "../main/Handlers"
import People_List from './People_List';
import Searchbox from './Searchbox';
import Root_Changer from './Root_Changer';

function App() {
  //Hooks 
  const [current_page, set_current_page] = useState("people");
  const [current_array, set_current_array] = useState([]);
 
  //Preparing Page
  useEffect(() => {
    Use_API(current_page)
    .then((page_val) => {
      set_current_array(page_val.results)
    })
  }, [current_page])

  if (current_array.length <= 0) {
    return (<h1> Yükleniyor... </h1>)
  }
  else if (current_page === Settings.API_Roots[0]) {
    return (
      <div>
        <Searchbox/>
        <Root_Changer appended_function = {set_current_page}/>
        <People_List array = {current_array}/>
      </div>
    );
  }
  else if (current_page === Settings.API_Roots[1]) {
    return (
      <div>
        <Searchbox/>
        <Root_Changer appended_function = {set_current_page}/>
        {console.log(current_array)}
      </div>
    );
  }
  else if (current_page === Settings.API_Roots[2]) {
    return (
      <div>
        <Searchbox/>
        <Root_Changer appended_function = {set_current_page}/>
        {console.log(current_array)}
      </div>
    );
  }
  else if (current_page === Settings.API_Roots[3]) {
    return (
      <div>
        <Searchbox/>
        <Root_Changer appended_function = {set_current_page}/>
        {console.log(current_array)}
      </div>
    );
  }
  else if (current_page === Settings.API_Roots[4]) {
    return (
      <div>
        <Searchbox/>
        <Root_Changer appended_function = {set_current_page}/>
        {console.log(current_array)}
      </div>
    );
  }
  else if (current_page === Settings.API_Roots[5]) {
    return (
      <div>
        <Searchbox/>
        <Root_Changer appended_function = {set_current_page}/>
        {console.log(current_array)}
      </div>
    );
  }
}

export default App;
