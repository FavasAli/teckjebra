import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginScreen from './screens/LoginScreen'


function App() {

  return (
    
      <Router>
        <Routes>

          <Route path='/Login' element={<LoginScreen />}></Route>
          

        </Routes>
      </Router>


  )
}

export default App;
