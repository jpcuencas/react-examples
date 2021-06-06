import mongoose from 'mongoose';

export async function connect() {
    try {
        await mongoose.connect('mongodb://localhost/mongograpql',{
            useNewUrlParser: true
        });
        console.log('conected...');
        
    } catch (error) {
        console.error('Fail ' + error);
    }
}