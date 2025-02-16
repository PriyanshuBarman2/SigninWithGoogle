import { Route, Routes } from "react-router";
import { GoogleOAuthProvider } from "@react-oauth/google";
import GloginButton from "./components/GloginButton";

function App() {
  return (
    <>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <Routes>
          <Route path="/login" element={<GloginButton />} />
        </Routes>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
