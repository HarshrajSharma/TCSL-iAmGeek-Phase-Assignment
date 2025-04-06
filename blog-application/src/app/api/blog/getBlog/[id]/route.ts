import {NextRequest, NextResponse} from 'next/server'
import Blog from '@/model/Blogs';

export const GET = async(req: NextRequest) => {
    try {
        const id = req.nextUrl.pathname.split('/').reverse()[0];
        const response = await Blog.findOne({_id: id})
        console.log(id)
        return new NextResponse(
            JSON.stringify(response),
            {status: 200}
        )
    } catch (error) {
        console.log(error)
        return new NextResponse(
            JSON.stringify({message: 'Error!'}),
            {status: 404}
        )
    }
}