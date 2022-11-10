import './App.css';
import Form from './Component/Form';
import Multi from './Component/Demofile';
import Layout from './Component/Layout';
import Home from './Component/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Views from './Component/Views';
import Submit from './Component/Submitform';
import Data from './Component/Data';
import SubmitForm from './Component/Submit';
import Calculator from './Component/Calculator';
import CRedux from './Component/CReduxForm';
import Main from './Component/Crud';
import ApiForm from './Component/Api';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="Home" element={<Home />}/>
          <Route path="Edit/:id" element={<Home />}/>
          <Route path='Views' element={<Views />}/>
          <Route path ='Submit' element={<Submit navigate={'/Data'}/>}/>
          <Route path ='Data' element={<Data />}/>
          <Route path='Calculator' element={<Calculator />}/>
          <Route path='CRedux' element={<CRedux />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    // // // <SubmitForm />
    // //<ApiForm />
    // <Form/>
  );
}

export default App;
