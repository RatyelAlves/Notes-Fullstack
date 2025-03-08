import fastify, { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { prisma } from "../../lib/prisma";

const schemaRequest = z.object({
    content: z.string(),
})

export async function createNotesRoute(
    request: FastifyRequest, 
    reply: FastifyReply
) {
    const {content} = schemaRequest.parse(request.body)
    
    try {
        await prisma.notes.create({
            data: {
                content,
            },
        })

        
        return reply.status(201).send({
            message: 'Nota criada com sucesso.'
        })

    } catch (error) {
        if(error) {
            console.log(error)
        }
    }
}