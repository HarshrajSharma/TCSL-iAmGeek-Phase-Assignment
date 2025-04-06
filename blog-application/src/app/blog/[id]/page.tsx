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
            {data.title}
            {data.body}
        </div>

    )
}