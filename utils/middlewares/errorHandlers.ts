import express from 'express';
import { envConfig } from '../../config';

const withErrorStack = (error: string, stack: any) => {
  if (envConfig.dev) {
    return { error, stack };
  }

  return error;
};

export const logErrors: express.ErrorRequestHandler = (
  error,
  _req,
  _res,
  next,
) => {
  console.log(error);
  next(error);
};

export const errorHandler: express.ErrorRequestHandler = (
  error,
  _req,
  res,
  _next,
) => {
  res.status(error.status || 500);
  res.json(withErrorStack(error.message, error.stack));
};
