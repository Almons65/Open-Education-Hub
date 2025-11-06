import HomePage from "./HomePage";
import ClientGate from "../components/ClientGate";

export default function Home() {
  return (
    <ClientGate>
      <HomePage />
    </ClientGate>
  );
}
