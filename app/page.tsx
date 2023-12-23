import { getUsers } from "@/lib/db";

export default async function Home() {
  const data = await getUsers();

  return <div>{JSON.stringify(data)}</div>;
}
