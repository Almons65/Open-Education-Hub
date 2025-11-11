import RankPage from "./RankPage";
import ClientGate from "../components/ClientGate";
import RankingPage from "./RankPage";

export default function Home() {
  return (
    <ClientGate>
      <RankingPage />
    </ClientGate>
  );
}

