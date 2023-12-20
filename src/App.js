

import Login from './Pages/Login';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Cards1 from './Pages/Cards1';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import WhLogin from './Pages/WhLogin';
import Purchsale from './Pages/Purchsale';
import Popup1 from './Pages/Popup1';
import Form1 from './Pages/Form1';
import Form2 from './Pages/Form2';
import Form3 from './Pages/Form3';


function App() {
  return (
    <div className="App">
     {/* <Login/> */}
     <Router>
      <Routes>
      <Route path='/Purchsale' element={<Purchsale/>}/>
        <Route path='/Card1' element={<Cards1/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/WhLogin' element={<WhLogin/>}/>
        <Route path='/Popup1' element={<Popup1/>}/>
        <Route path='/Form1' element={<Form1/>}/>
        <Route path='/Form2' element={<Form2/>}/>
        <Route path='/' element={<Form3/>}/>





</Routes>
</Router>


    
    </div>
  );
}

export default App;
