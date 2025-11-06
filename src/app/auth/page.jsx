// main authentication page component
import AuthPage from "./AuthPage";
// A custom component named 'ClientGate'
// ensures that its children only render on the client-side (in the browser),
// which is necessary for components using hooks like 'useState' or 'useEffect'.
import ClientGate from "../components/ClientGate";

// Main component for this page
export default function Auth() {
  return (
    // Use the ClientGate component as a wrapper
    <ClientGate>
      {/* Render the AuthPage component *inside* the ClientGate */}
      {/* This ensures AuthPage and its hooks only run on the client */}
      <AuthPage />
    </ClientGate>
  );
}
