import Head from "next/head";
import Image from "next/image";
import { useRoomContext } from "../store/roomAction";
import styles from "../styles/Home.module.css";
import { getAllRoom } from "../utils/getAllRoom";

export default function Index() {
  const { allRooms } = useRoomContext();
  return (
    <div>
      {allRooms.map((room, index) => (
        <p key={index}>{room._id}</p>
      ))}
    </div>
  );
}

export async function getServerSideProps({ req }) {
  const allRooms = await getAllRoom(req);
  console.log(allRooms);
  return {
    props: {
      allRooms: allRooms,
    },
  };
}
