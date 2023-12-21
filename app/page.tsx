import { getUsers } from "@/db/db";

export default async function Home() {
  const data = await getUsers();

  return <div>{JSON.stringify(data)}</div>;
}
