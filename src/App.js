import './App.css';
import 'boxicons/css/boxicons.min.css';
import {BrowserRouter, Routes, Route, HashRouter} from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import FriendsPage from './pages/friendsPage/FriendsPage';


function App() {
  return (
    <HashRouter>
    
      <Routes>
        <Route path='/' element={<AppLayout/>}>
          <Route index element={<FriendsPage/>} />
          <Route path='/users' element={<FriendsPage/>} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
