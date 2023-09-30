import { Request, Response } from "express";
import { Comment } from "../entity/Comment";
import { getRepository } from "typeorm";

export async function save(request: Request , response: Response){
    const commentRepository = getRepository(Comment);

    const savedComment = await commentRepository.save(request.body);

    return response.status(200).json(savedComment);
};

export async function getAll(request: Request , response: Response){
    const commentRepository = getRepository(Comment);

    const allComment = await commentRepository.find();

    return response.json(allComment);
} 

export async function deleteComment(request: Request, response: Response) {
    const { id } = request.params;
    const commentRepository = getRepository(Comment);

    try {
        const deleteResult = await commentRepository.delete(id);

        if (deleteResult.affected === 0) {
            return response.status(404).json({ message: "Comentário não encontrado" });
        }

        return response.status(204).send();
    } catch (error) {
        console.error(error);
        return response.status(500).json({ message: "Erro ao excluir o comentário" });
    }
}
