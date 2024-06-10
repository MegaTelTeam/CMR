import userModel from "@/lib/database/models/user.model";
import { connectToDatabase } from "@/lib/database/mongodb";
import Image from "next/image";

export default async function Home() {
  await connectToDatabase();
  
  const user = new userModel({
    username: "test",
    email: "test",
    hashedPassword: "test",
  })

  const obj = await user.save()
  console.log(obj)

  return (
    <></>
  );
}
