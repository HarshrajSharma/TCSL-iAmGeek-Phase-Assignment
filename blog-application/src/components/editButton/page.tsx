"use client"
import { Button } from "@mui/material";
import {redirect} from 'next/navigation'

interface IDeleteButton{
    id: string
}
export default function EditButton(props:IDeleteButton){

    const handleRedirect = async () =>{
        redirect(`/blog/edit/${props.id}`)
      }
    return(
        <Button onClick={handleRedirect} >Edit</Button>
    )
}