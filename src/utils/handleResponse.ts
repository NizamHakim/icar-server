import { Response } from "express";
import { ExpectedError } from "./errors/expectedError/ExpectedError";
import { messagesUtils } from "../utils/messagesUtils";

export const handleResponse = ({
  res,
  statusCode,
  message,
  data,
  error,
}: {
  res: Response;
  statusCode?: number;
  message?: string;
  data?: [] | {};
  error?: any;
}) => {
  if (error !== undefined) {
    console.error(error);
    const isExpectedError = error instanceof ExpectedError;
    res.status(error.statusCode).json({
      success: false,
      statusCode: isExpectedError ? error.statusCode.toString() : "500",
      message: isExpectedError
        ? error.message
        : messagesUtils.error.internalServerError,
      errors: error.body,
    });
  } else {
    res.status(statusCode!).json({
      success: true,
      statusCode: statusCode?.toString(),
      message: message,
      data: data,
    });
  }
};
