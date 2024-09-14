import { Router } from "express";
import { FormHandlerController } from "./formHandler.controller.js";

const router = Router();

router.post("/webhook", FormHandlerController.createForm);

export const FormHandlerRouter = router;
