// opcional: forzar servidores DNS públicos si la red es problemática
import dns from "dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);


import mongoose from 'mongoose';
export async function connectDB() {
try {
        await mongoose.connect("mongodb+srv://grupo-16:grupo-16@cluster0.blryo.mongodb.net/NodeMod3Cohorte5?retryWrites=true&w=majority");
        console.log('Conexión exitosa a MongoDB');
    } 
    catch (error) 
    {
        console.error('Error al conectar a MongoDB:', error);
        process.exit(1);
}
}



