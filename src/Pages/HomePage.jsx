import Button from "../../components/Button"
import Card from "../../components/Card"
import Navbar from "../../components/NavBar"

function HomePage(){
    return(
        <>

  
<Navbar/>
<div className="flex flex-wrap">
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
</div>
  {/* <Button title={login}/> */}
  
   {/* <Button title="LOGIN"/> */}
        </>
    )
}
export default HomePage