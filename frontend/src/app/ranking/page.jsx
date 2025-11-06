import RankPage from "./RankPage";
import ClientGate from "../components/ClientGate";

export default function Home() {
  return (
    <ClientGate>
      <RankPage />
    </ClientGate>
  );
}
