import absoluteUrl from "next-absolute-url";
const getAllRoom = async (req) => {
  const { origin } = absoluteUrl(req);
  const response = await fetch(`${origin}/api/rooms`);
  const responseData = await response.json();
  return responseData;
};

export { getAllRoom };
