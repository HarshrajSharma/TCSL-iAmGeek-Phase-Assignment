import mongoose from 'mongoose'


const connectDB = async () => {

    const isDbConnected = mongoose.connection.readyState;

    if(isDbConnected===1){
        console.log('Already Connected!');
        return;
    }

    await mongoose.connect(process.env.DATABASE_URL as string)
                .then(()=> console.log('DB Connected!'))
                .catch((err)=>console.log(err))
}
export default connectDB;