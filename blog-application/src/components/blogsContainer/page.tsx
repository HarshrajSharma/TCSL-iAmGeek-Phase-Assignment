import { Card1 } from "../card1/page";
import styles from './page.module.css'

interface IBlog{
    _id: string,
    title: string,
    body: string
  }


export const BlogsContainer = async () => {
  const response = await fetch("http://localhost:3000/api/blog/getAllBlogs");

  if (!response.ok) {
    throw new Error(`Response Status: ${response.status}`);
  }

  const allBlogs = await response.json();

  const renderedData = allBlogs.reverse().map((e: IBlog, index: number) => {
    return <Card1 key={index} title={e.title} body={e.body} _id={e._id}/>;
  });

  return(
    <div className={styles.blogContainerMain} >
        {renderedData}
    </div>
  );
};
