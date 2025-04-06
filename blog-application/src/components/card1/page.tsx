'use client';

import { Card, CardContent, Typography, CardActionArea } from "@mui/material";
import {redirect} from 'next/navigation'

interface IProps {
  _id: string,
  title: string;
  body: string;
}

export const Card1 = (props: IProps) => {
  return (
    <CardActionArea sx={{ maxWidth: 345, minWidth: 345, marginTop: 5 }} onClick={()=>redirect(`blog/${props._id}`)}>
      <Card>
        {/* <CardMedia
                    component="img"
                    height="140"
                    image="https://picsum.photos/140/"
                    alt="green iguana"
                /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {props.body}
          </Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};
