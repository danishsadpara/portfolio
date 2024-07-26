import Hero from "@/components/Hero";
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
    <main className="flex  flex-col items-center justify-between py-24">
      <Hero />
    </main>
  );
}
