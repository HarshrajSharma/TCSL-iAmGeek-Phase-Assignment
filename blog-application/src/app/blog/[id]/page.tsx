import {Card } from '@mui/material';
import styles from './page.module.css'
import DeleteButton from '@/components/deleteButton/page';
import EditButton from '@/components/editButton/page';
interface IProps{
    params: {
        id: string
    }
}


export default async function Blog (props :IProps){
    const id = props.params.id;
    const fetchedData = await fetch(`http://localhost:3000/api/blog/getBlog/${id}`)

    const data = await fetchedData.json();

    

    return(
        <div>
            <Card>
                <EditButton id={id}/>
                <DeleteButton id={id} />
            </Card>
            <h1 className={styles.head} >{data.title}</h1>
            <h4 className={styles.body} >{data.body}</h4>
        </div>

    )
}