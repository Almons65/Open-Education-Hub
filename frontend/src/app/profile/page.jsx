import ProfilePage from "./ProfilePage";
import ClientGate from "../components/ClientGate";

export default function Profile() {
  return (
    <ClientGate>
      <ProfilePage />
    </ClientGate>
  );
}
