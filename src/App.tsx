import "./App.css";
import { useAuth } from "./hooks";
import AuthenticatedPage from "./pages/authenticated";
import UnauthenticatedPage from "./pages/unauthenticated";

function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      {user ? <AuthenticatedPage /> : <UnauthenticatedPage />}
    </div>
  );
}

export default App;
