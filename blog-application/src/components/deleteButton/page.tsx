"use client"
import { Button } from "@mui/material";
import {redirect} from 'next/navigation'

interface IDeleteButton{
    id: string
}
export default function DeleteButton(props:IDeleteButton){

    const handleDelete = async () =>{
        await fetch(`/api/blog/deleteBlog/`, {
          method: 'DELETE',
          body: JSON.stringify({id: props.id})
        })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log('Success:', data);
          redirect('/');
        })
        .catch((error) => {
          console.error('Error:', error);
        });

        redirect('/')
      }
    return(
        <Button onClick={handleDelete} >Delete</Button>
    )
}