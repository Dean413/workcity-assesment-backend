const express = require("express")
const app = express();
const authRoutes = require ("./routes/authRoutes")
const clientRoutes = require("./routes/clientRoute")
const projectRoutes = require("./routes/projectRoute")
const errorHandler = require("./middleware/errorHandler")