import { prisma } from "../../lib/prisma";

export async function getNotesRoute() {
    try {
        const notes = await prisma.notes.findMany({
            orderBy: {
                createdAt: 'desc',
            },
        })

        return notes
    } catch (error) {
        if(error) {
            console.log(error)
        }
    }    
}