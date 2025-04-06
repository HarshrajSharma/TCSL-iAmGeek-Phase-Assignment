import {NextRequest, NextResponse} from 'next/server'
import Blog from '@/model/Blogs'

// @{id: id}
export const DELETE = async (req: NextRequest) => {
    try {
        const data = await req.json();
        const response = await Blog.findOne({_id: data.id})

        if(!response){
            return new NextResponse(
                JSON.stringify({message: 'Blog is not found!'}),
                {status: 404}
            )  
        }

        await Blog.deleteOne({_id: data.id})
        return new NextResponse(
            JSON.stringify({message: 'Blog Deleted!'}),
            {status: 200}
        )
    } catch (error) {
        console.log(error)
        return new NextResponse(
            JSON.stringify({message: error}),
            {status: 400}
        )
    }
}