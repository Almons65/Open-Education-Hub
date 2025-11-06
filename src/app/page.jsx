import AuthPage from "./auth/AuthPage";
import ClientGate from "./components/ClientGate";

export default function Page() {
  return (
    <ClientGate>
      <AuthPage/>
    </ClientGate>
  );
}
