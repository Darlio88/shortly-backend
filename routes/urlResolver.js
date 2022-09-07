import Express from 'express';

import {resolver} from "../controllers/resolverController.js"

const routes = Express.Router();

routes.get("/:id", resolver)

export default routes