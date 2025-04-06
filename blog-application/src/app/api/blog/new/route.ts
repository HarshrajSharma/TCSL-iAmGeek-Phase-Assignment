import {NextRequest, NextResponse} from 'next/server'
import Blog from '@/model/Blogs';

// @{title: title, body: body}
export const POST = async(req:NextRequest) => {
    try {
        const data = await req.json();

        const newBlog = new Blog({
            title:data.title,
            body: data.body
        })
        await newBlog.save();

        return new NextResponse(
            JSON.stringify({message: 'Blog Created!'}),
            {status: 201}
        )
    } catch (error) {
        console.log(error)
        return new NextResponse(
            JSON.stringify({message: 'Error!'}),
            {status: 400}
        )
    }
}