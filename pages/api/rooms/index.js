import { dbConnection } from "../../../server/utils/dbConnection";
import nc from "next-connect";

/* controllers */

//roomController
import { allRoom } from "../../../server/controllers/roomControllers";

dbConnection();

const handler = nc();

handler.get(allRoom);

export default handler;
