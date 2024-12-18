import { PlayerModel } from "../models/player-model";
import { StatisticModel } from "../models/statistics-model";
import * as PlayerRepository from "../repositories/players-repository";
import * as httpResponse from "../utils/http-helper";


export const getPlayerService = async () => {
    const data = await PlayerRepository.findAllPlayers();
    let response = null;

    if(data){
         response = await httpResponse.ok(data);
    } else {
        response = await httpResponse.noContent()
    }

    return response;
};

export const getPlayerByIdService = async (id: number) => {
    //pedir pro repositório de dados
    const data = await PlayerRepository.findPlayerById(id);
    let response = null;

    if(data){
        response = await httpResponse.ok(data);
    } else {
        response = await httpResponse.noContent()
    }

    return response;
}

export const createPlayerService = async (player: PlayerModel) => {
    let response = null
    //Verifica se está vazio
    if(Object.keys(player).length !== 0){
        await PlayerRepository.insertPlayer(player);
        response = await httpResponse.created()
    } else {
        response = await httpResponse.badRequest();
    }
    return response;
}

export const deletePlayerService = async (id: number) => {
    let response = null
    const isDeleted = await PlayerRepository.deleteOnePlayer(id)
    
    if(isDeleted) {
        response = await httpResponse.ok({message: "deleted"})
    } else {
        response = await httpResponse.badRequest()
    }

    
    return response;
}

export const updatePlayerService = async (id: number, statistics: StatisticModel) => {
    const data = await PlayerRepository.findPlayerAndModifyPlayer(id, statistics);
    let response = null
    if (Object.keys(data).length) {
         response = await httpResponse.ok(data)
    } else {
        response = await httpResponse.badRequest()
    }
         return response;
}