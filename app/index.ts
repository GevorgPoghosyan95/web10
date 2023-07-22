import express from 'express';
import {createDatabaseConnection} from "./client/db/connection";
import router from "./client/routes/client.routes";
import ErrorHandlerMiddleware from "./client/middlewares/error-handler.middleware";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/client', router)
app.use(ErrorHandlerMiddleware.init);


const port = 5000;

app.listen(port, async () => {
    const connection = await createDatabaseConnection()
    await connection.synchronize();
    console.log(`Server is running on port ${port}`);
});