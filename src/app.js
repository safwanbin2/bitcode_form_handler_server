import express from "express";
import cors from "cors";
import globalErrorHandler from "./app/error/globalErrorHandler.js";
import routeNotFound from "./app/error/routeNotFound.js";
import { FormHandlerRouter } from "./app/modules/FormHanlder/formHandler.route.js";
import sendResponse from "./app/utils/sendResponse.js";

// App initialization
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
// test
app.get("/", async (req, res) => {
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Server is working",
    data: null,
  });
});
app.use("/api/v1/form-handler", FormHandlerRouter);

// Error handlers
app.use(globalErrorHandler);
app.use(routeNotFound);

export default app;
