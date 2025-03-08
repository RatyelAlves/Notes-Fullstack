import type { FastifyInstance } from "fastify";
import { createNotesRoute } from "./controllers/create-notes-route";
import { getNotesRoute } from "./controllers/get-notes-routes";
import { deleteNotesRoute } from "./controllers/delete-notes-route";

export async function appRoutes(app: FastifyInstance) {
    app.post('/notes', createNotesRoute)
    app.get('/notes', getNotesRoute)
    app.delete('/notes/:id', deleteNotesRoute)
}