import styles from './page.module.css'
import {redirect} from 'next/navigation'

interface IProps{
    params: {
        id: string
    }
}


export default async function Blog (props :IProps){
    const id = props.params.id;
    const fetchedData = await fetch(`http://localhost:3000/api/blog/getBlog/${id}`)

    const data = await fetchedData.json();

    const updateBlog = async (formdata: FormData) => {
        "use server"
        const title = formdata.get('title') as string;
        const body = formdata.get('body') as string

        const response = await fetch(`http://localhost:3000/api/blog/updateBlog/${id}`, {
            method: 'PUT',
            body: JSON.stringify({title, body})
        })

        if(!response.ok){
            console.log('Error!')
        }
        redirect('/')
    }
    return(
        <form action={updateBlog} className={styles.formMain}>
            <h3 className={styles.formHeading} >Update Snippet</h3>
            <div className={styles.formContainer} >
                <div className='' >
                    <label className='' htmlFor="title">Title</label>
                    <input name='title' className='' id='title' defaultValue={data.title}/>
                </div>
                <div className='' >
                    <label className='' htmlFor="code">Body</label>
                    <textarea name='body' className='' id='code' defaultValue={data.body}/>
                </div>

                <button className={styles.button} type='submit'>Update</button>
            </div>
        </form>

    )
}