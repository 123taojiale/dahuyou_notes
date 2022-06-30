import React, { PureComponent } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Admin from "./pages/Admin";

export default class App extends PureComponent {
  render() {
    return (
      <>
       <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/*' element={<Admin />} />
        </Routes>
       </Router>
      </>
    )
  }
}
