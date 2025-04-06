import {NextResponse} from 'next/server'


export const GET =() => {
    return new NextResponse(
        JSON.stringify({message: 'Server Running!'}),
        {status: 200}
    )
}