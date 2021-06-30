import { dbConnection } from "../utils/dbConnection";
import Room from "../models/room";

const allRoom = async (req, res, next) => {
  for (let i = 0; i < 10; i++) {
    const newRoom = Room({
      name: `neth-${i}`,
    });
    await newRoom.save();
  }
  //   const newRoom = Room({
  //     name: `neth-${1}`,
  //   });
  //   await newRoom.save();
  return res.status(200).json({ message: "allRoom /roomController" });
};
export { allRoom };
