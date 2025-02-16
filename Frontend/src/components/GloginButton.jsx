import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
const GloginButton = () => {

  const handleLogin = useGoogleLogin({
    onSuccess: async ({ code }) => {
      const { data } = await axios.post(
        "http://localhost:3000/auth/google",
        { code },
        { withCredentials: true }
      );
        console.log(data); // use the userdata if needed  
    },
      
    onError: (errorResponse) => {
      console.error("Login error:", errorResponse);
    },
    
    flow: "auth-code",
  });

  return <button onClick={handleLogin}>Login/Sign in with Google</button>;
};

export default GloginButton;
