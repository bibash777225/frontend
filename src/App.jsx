import {BrowserRouter,Routes,Route} from "react-router-dom"

import CreatePage from "./Pages/CreatePage"
import HomePage from "./Pages/HomePage"
import SinglePages from "./Pages/SinglePage"
import EditPage from "./Pages/EditPage"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* // component lai invoke garney utha component ko name k xa<Home/>  */}
    <Route path ="/create-page" element={<CreatePage/> }/>  
    <Route path="/"element={<HomePage/>  }/>
  <Route path="/single-page" element={<SinglePages/>} />
 <Route path="/edit-page" element={<EditPage/>} />


    </Routes>
    
    </BrowserRouter>
  )
    
}
//component vaneko type of function jasley jahilr ne jsx return garxa html jasto syntax 
export default App
