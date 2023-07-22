import express from 'express';
import router from "./routes/client";
import ErrorHandlerMiddleware from "./middlewares/error-handler.middleware";
import {connectAll} from "./db/all-connection";
import swaggerUi   from "swagger-ui-express"
import {apiDocumentation} from "./docs/apidoc";

const app = express();

app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(apiDocumentation)
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/client', router)
app.use(ErrorHandlerMiddleware.init);


const port = 5000;

app.listen(port, async () => {
    await connectAll()
    console.log(`Server is running on port ${port}`);
});