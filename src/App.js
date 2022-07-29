import HomeScreen from "./components/homeScreen";
import loginScreen from "./components/loginScreen";
import {BrowserRouter as Routes, Route} from 'react-router-dom'


function App() {
  return (

      <Routes>
        <Route path='/' element={<App />} >
          <Route index element={<HomeScreen />} />
          <Route path="loginScreen" element={<loginScreen />} />
        </Route>
      </Routes>

  );
}

export default App;
