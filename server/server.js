import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import portfolioRouter from "./routes/portfolio.routes.js";
const app = express();

app.use(express.json(), cors());
app.use('/api', portfolioRouter);
dotenv.config()
const PORT = process.env.PORT;


app.listen(PORT, () => {
    console.log(`Port is listening on: ${PORT}`);
});

