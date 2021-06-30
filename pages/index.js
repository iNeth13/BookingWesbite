import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { getAllRoom } from "../utils/getAllRoom";

export default function Home({ allRooms }) {
  return (
    <div>
      {allRooms.map((room, index) => (
        <p key={index}>{room._id}</p>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch(`${process.env.BASE_URL}/api/rooms`);
  const responseData = await response.json();
  console.log(allRooms);
  return {
    props: {
      allRooms: responseData,
    },
  };
}
