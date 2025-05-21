import { Link, useNavigate, useParams } from "react-router-dom"
import Navbar from "../../components/NavBar"
import { useEffect, useState } from "react"
import axios from "axios"

 const SinglePages=function(){
    const navigate=useNavigate

    const{id}=useParams()  //used to get the  parameter of the route  functionality provided by react 

    const[singleBook,setSingleBook]=useState([])

    const fetchSingleBook=async function(){
        const response=await axios.get("http://localhost:4000/api/books/"+id)
        setSingleBook(response.data.datas)
    }
    useEffect(()=>{
        fetchSingleBook()

    },[])
    console.log(singleBook)

    const deleteBook= async()=>{

       
        const response=  await axios.delete("http://localhost:4000/api/books/"+id)
        if (response.status===200)
        {
       navigate("/")

        }else{
            alert(" something went worng ")
        }
    }
    return(
        <>
        
        <Navbar/>
        <h1>
        this is single apge
        </h1>
        <h1>
            {singleBook.bookAuthor}
        </h1>
        <h1>
            {singleBook.bookGenre}
        </h1>
        <h1>
            {singleBook.bookPrice}
        </h1>
        <button onClick={deleteBook}> Delete me </button>
        </>
       
    )
}
export default SinglePages