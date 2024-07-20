import Avatar from "../components/Avatar";
import Tag from "../components/Tag";

export default function Home() {
  type optional<Type> = {
    [Property in keyof Type]+?: Type[Property];
  };
  type user = {
    name: string;
    email: string;
    password: string;
    age: string;
  };
  type mutableUser = optional<user>;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
