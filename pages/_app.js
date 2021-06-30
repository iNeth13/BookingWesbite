import RoomProvider from "../store/roomAction";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const { allRooms } = pageProps;
  return (
    <RoomProvider allRooms={allRooms}>
      <Component {...pageProps} />
    </RoomProvider>
  );
}

export default MyApp;
