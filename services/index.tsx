export async function getRides() {
  const response = await fetch("./api/rides");
  const data = await response.json();
  return data.Ride;
}
export async function getUser() {
  const response = await fetch("./api/users");
  const data = await response.json();
  return data.users;
}
