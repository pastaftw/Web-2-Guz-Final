//Common Stuff
import {useState, useEffect} from 'react';
import './App.css';

//Importing Handlers Module
import Settings from '../main/Settings';
import {Use_API} from "../main/Handlers"
import People_List from './People_List';

function App() {
  //Hooks
  const [current_page, set_current_page] = useState(Settings.Default_Page);
  const [current_array, set_current_array] = useState([]);

  //Preparing Page
  useEffect(() => {
    Use_API(current_page).then((page_val) => {set_current_array(page_val)})
  })

  if (current_array.length === 0) {
    return (<h1> Yükleniyor... </h1>)
  }
  else if (current_page === Settings.API_Roots[0]) {
    return (<People_List array = {current_array}/>);
  }
}

export default App;
