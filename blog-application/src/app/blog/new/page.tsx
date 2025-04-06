import { redirect } from "next/navigation";
import styles from './page.module.css'

export default function AddBlog (){

    
    const createBlog = async (formdata: FormData)=>{
        'use server';
        const title = formdata.get('title') as string;
        const body = formdata.get('body') as string

        const response = await fetch('http://localhost:3000/api/blog/new', {
            method: 'POST',
            body: JSON.stringify({title, body})
        })

        if(!response.ok){
            console.log('Error!')
        }
        redirect('/')
    }
    return(
        <form action={createBlog} className={styles.formMain}>
            <h3 className={styles.formHeading} >Create Snippet</h3>
            <div className={styles.formContainer} >
                <div className='' >
                    <label className='' htmlFor="title">Title</label>
                    <input name='title' className='' id='title'/>
                </div>
                <div className='' >
                    <label className='' htmlFor="code">Body</label>
                    <textarea name='body' className='' id='code'/>
                </div>

                <button type='submit' className={styles.button} >Create</button>
            </div>
        </form>
    )
}