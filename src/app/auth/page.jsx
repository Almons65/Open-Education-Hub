import AuthPage from "./AuthPage";
import ClientGate from "../components/ClientGate";

export default function Home() {
  return (
    <ClientGate>
      <AuthPage />
    </ClientGate>
  );
}
