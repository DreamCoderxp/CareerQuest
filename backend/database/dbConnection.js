import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGODB_URI, {
        dbName: "MERN_STACK_JOB_SEEKING_APP ",
    })

    .then(() => {
        console.log("Database connected successfully");
    }
    )
    .catch((err) => {
        console.log("Error connecting to database", err);
    });

    mongoose.connection.on("connected", () => {
        console.log("Mongoose connected to db");
    });

    mongoose.connection.on("error", (err) => {
        console.log("Mongoose connection error", err);
    }); 

    mongoose.connection.on("disconnected", () => {
        console.log("Mongoose connection is disconnected");
    });

    
}
    