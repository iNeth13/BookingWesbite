const getAllRoom = async () => {
  const response = await fetch(`${process.env.BASE_URL}/api/rooms`);
  const responseData = await response.json();
  return responseData;
};

export { getAllRoom };
