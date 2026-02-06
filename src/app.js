import express from 'express';
import router from './routers/equipment.routes.js';

//configure Express.js app
const app = express();

//middleware
app.use(express.json());

//routers
app.use("/api/equipment", router);

export default app;