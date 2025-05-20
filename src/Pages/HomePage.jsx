import axios from "axios"
import Card from "../../components/Card"
import Navbar from "../../components/NavBar"
import { useEffect, useState } from "react"

function HomePage(){
    const[books,setBooks]=useState([])
   const  fetchBooks = async()=>{
    const response =await axios.get("http://localhost:4000/api/books/")
   setBooks(response.data.datas)
   }
   useEffect(()=>{
    fetchBooks()

   },[])

    return(
        <>

  
<Navbar/>
<div className="flex flex-wrap">
{

    books.map(function(book){

        return(
            <Card book={book}/>  // books vanne state lai loop garyo using map higher order function, arrayToLoop.map(function(arrayKoEachItem){ return ()})
        )
    })
}
</div>
  {/* <Button title={login}/> */}
  
   {/* <Button title="LOGIN"/> */}
        </>
    )
}
export default HomePage