import './App.css';
import 'boxicons/css/boxicons.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import FriendsPage from './pages/friendsPage/FriendsPage';


function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path='/' element={<AppLayout/>}>
          <Route index element={<FriendsPage/>} />
          <Route path='/users' element={<FriendsPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
