import fastify from "fastify";
import {fastifyCors} from '@fastify/cors'
import { appRoutes } from "./routes/app-routes";

export const app = fastify()

app.register(fastifyCors)

app.register(appRoutes)