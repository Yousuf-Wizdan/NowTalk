import "dotenv/config";
import express , { Request } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { Env } from "./config/env.config"
import { asyncHandler } from "./middlewares/asyncHandler.middleware";
import { HTTPSTATUS } from "./config/http.config";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));
app.use(cors({
    origin: Env.FRONTEND_ORIGIN,
    credentials: true
}))

app.get('/health', asyncHandler(async (req: Request, res) => {
    res.status(HTTPSTATUS.OK).json({
        status: 'OK',
        message: 'Server is healthy'
    });
}));

app.listen(Env.PORT , () => {
    console.log(`Server is running on port ${Env.PORT} in ${Env.NODE_ENV} mode`);
})
