import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { prisma } from "../../lib/prisma";

const schemaRequestParams =  z.object({
    id: z.string(),
})

export async function deleteNotesRoute(
    request: FastifyRequest, 
    reply: FastifyReply
) {
    const {id} = schemaRequestParams.parse(request.params)

    try {
        await prisma.notes.delete({
            where: {
                id,
            },
        })


        return reply.status(204).send()
    } catch (error) {
        if(error) {
            console.log(error)
        }
    }
}