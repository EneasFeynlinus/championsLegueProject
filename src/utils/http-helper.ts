import { HttpResponse } from "../models/http-response-model"
import { PlayerModel } from "../models/player-model";


export const ok = async (data: any): Promise<HttpResponse> => {
   return{
     statusCode: 200,
     body: data
   };
};

export const created = async (): Promise<HttpResponse> => {
  return {
    statusCode: 201,
    body: {
      message: "Player created successfully"
    }
  }
}

export const noContent = async(): Promise<HttpResponse> => {
  return{
    statusCode: 204,
    body: null
  };
};

export const badRequest = async(): Promise<HttpResponse> => {
  return{
    statusCode: 400,
    body: "Bad Request",
  }
}