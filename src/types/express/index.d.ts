import express from "express";

declare global {
  namespace Express {
    export interface Request {
        debugId: string
        ipAddress: string,
        device: string
        file?: any
    }
    
  }
  export interface Error {
    status?: number;
    isJoi?: any;
    details?: any;
    message: string
  }
}