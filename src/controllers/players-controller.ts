import express, {Request, Response} from "express";
export const getPlayer = (request: Request, response: Response) => {
    response.status(200).json([{player: "Beckhan"},{player: "Ronaldo"},{player: "Roberto Carlos"}])
}