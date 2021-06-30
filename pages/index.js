import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { getAllRoom } from "../utils/getAllRoom";

export default function Home({ allRooms }) {
  return (
    <div>
      {allRooms.map((room, index) => (
        <p key={idex}>{room._id}</p>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const allRooms = await getAllRoom();
  return {
    props: {
      allRooms: allRooms,
    },
  };
}
