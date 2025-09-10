import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound"
import { Toaster } from "./components/ui/toaster";
import { Analytics } from "@vercel/analytics/react"
function App() {
  

  return (
    <>
    <Toaster/>
      <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
