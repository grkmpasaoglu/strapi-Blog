import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Blogs from "./pages/Blog"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Blogs/>}/>
      </Routes>
    </Router>
  )
}