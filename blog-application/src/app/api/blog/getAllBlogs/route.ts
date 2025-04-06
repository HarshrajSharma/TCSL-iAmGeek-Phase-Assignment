import {NextResponse} from 'next/server'
import Blog from '@/model/Blogs'

export const GET = async () => {

    try {
        const data = await Blog.find();

        return new NextResponse(
            JSON.stringify(data),
            {status: 200}
        )   
    } catch (error) {
        console.log(error)
        return new NextResponse(
            JSON.stringify({message:'Error!'}),
            {status: 404}
        )  
    }
    
}