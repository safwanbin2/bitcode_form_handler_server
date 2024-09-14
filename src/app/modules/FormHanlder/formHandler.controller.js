import catchAsync from "../../utils/catchAsync.js";
import sendResponse from "../../utils/sendResponse.js";
import { FormHandlerService } from "./formHandler.service.js";

const createForm = catchAsync(async (req, res) => {
  const result = await FormHandlerService.createForm(req?.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Form created successfully!",
    data: result,
  });
});

export const FormHandlerController = {
  createForm,
};
