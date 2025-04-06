import {NextRequest, NextResponse} from 'next/server'
import Blog from '@/model/Blogs'

interface IData{
    title: string,
    body: string
}
// @{title: title, body: body}
export const PUT = async (req:NextRequest) => {
    try {
        const id = req.nextUrl.pathname.split('/').reverse()[0]
        const data:IData = await req.json();

        // checkin if blog exists with given id
        const isBlogFound = await Blog.findOne({_id: id})
        if(!isBlogFound) return new NextResponse(JSON.stringify({message: 'Invalid ID'}), {status: 404})
        
        await isBlogFound.updateOne({title: data.title, body: data.body})
        return new NextResponse(JSON.stringify({message: 'Blog Updated!'}), {status: 200})

    } catch (error) {
        console.log(error)
        return new NextResponse(JSON.stringify({message: 'Error!'}), {status: 400})
    }
}