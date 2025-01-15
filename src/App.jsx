import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'


// Screens
import Login from './screens/Login'
import NoMatch from './screens/NoMatch'
import Home from './screens/Home'


function App() {

  return (
    <>
      <Router>
        <TitleUpdater />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<NoMatch />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

function TitleUpdater() {
  const location = useLocation()

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        document.title = 'Welcome'
        break
      case '/home':
        document.title = 'Home'
        break
      default:
        document.title = 'Not Found'
    }
  }, [location])

  return null
}

export default App
