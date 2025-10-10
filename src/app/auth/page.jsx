import AuthPage from "./AuthPage";
import ClientGate from "../components/ClientGate";

export default function Auth() {
  return (
    <ClientGate>
      <AuthPage />
    </ClientGate>
  );
}
