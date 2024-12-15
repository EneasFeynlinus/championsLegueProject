import express, {Request, Response} from "express";
import { getPlayerService } from "../services/players-service";

export const getPlayer = async (request: Request, response: Response) => {

    const responseService = await getPlayerService();
    response.status(200).json(responseService)
}