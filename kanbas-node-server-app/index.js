import express from 'express';
import Hello from "./Hello.js";
import Lab5 from "./Lab5/index.js";
import cors from "cors";
import session from "express-session";
import UserRoutes from "./kanbas/Users/routes.js";
import CourseRoutes from "./kanbas/Courses/routes.js";
import ModuleRoutes from "./kanbas/Modules/routes.js";
import EnrollmentRoutes from './kanbas/Enrollments/routes.js';
import AssignmentRoutes from './kanbas/Assignments/routes.js';
import "dotenv/config";
const app = express();
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: process.env.NETLIFY_URL || "http://localhost:3000",
}));
const sessionOptions = {
    secret: process.env.SESSION_SECRET || "kanbas",
    resave: false,
    saveUninitialized: false,
};

// const sessionOptions = {
//     secret: "any string",
//     resave: false,
//     saveUninitialized: false,
//   };

const cors = require('cors')
const corsOption = {
    origin: ['https://a5--saisiddharthavivekdhirrangojua1.netlify.app/'],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
}
app.use(cors(corsOption));
  
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
        domain: process.env.NODE_SERVER_DOMAIN,
    };
}
app.use(session(sessionOptions));
UserRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);
EnrollmentRoutes(app);
AssignmentRoutes(app);
Lab5(app);
Hello(app);
app.listen(process.env.PORT || 4000);
// app.listen(4000);