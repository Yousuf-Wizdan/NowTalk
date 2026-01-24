import "dotenv/config";
import path from "path";
import express , { Request, Response } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import http from "http";
import { Env } from "./config/env.config"
import { asyncHandler } from "./middlewares/asyncHandler.middleware";
import { HTTPSTATUS } from "./config/http.config";
import connectDatabase from "./config/database.config";
import "./config/passport.config";
import { errorHandler } from "./middlewares/errorHandler.middleware";
import router from "./routes";
import { initializeSocket } from "./lib/socket";


const app = express();
const server = http.createServer(app);

app.use(express.json({ limit: '10mb' }));
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));
app.use(cors({
    origin: Env.FRONTEND_ORIGIN,
    credentials: true
}))

//socket - initialize after middleware
initializeSocket(server);

app.get('/health', asyncHandler(async (req: Request, res) => {
    res.status(HTTPSTATUS.OK).json({
        status: 'OK',
        message: 'Server is healthy'
    });
}));

app.use("/api" , router);

if (Env.NODE_ENV === "production") {
  const clientPath = path.resolve(__dirname, "../../frontend/dist");

  //Serve static files
  app.use(express.static(clientPath));

  app.get(/^(?!\/api).*/, (req: Request, res: Response) => {
    res.sendFile(path.join(clientPath, "index.html"));
  });
}

app.use(errorHandler)

server.listen(Env.PORT , async () => {
    await connectDatabase();
    console.log(`Server is running on port ${Env.PORT} in ${Env.NODE_ENV} mode`);
})
