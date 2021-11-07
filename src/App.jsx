import { createTheme, CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material";
import { createContext, useEffect, useState } from "react";
import JoblyApi from "./api";
import AppRoutes from "./components/AppRoutes";
import jwt from "jsonwebtoken";
import { useNavigate } from "react-router";
import useLocalStorage from "./hooks/useLocalStorage";

export const UserContext = createContext({});

const App = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = createTheme({
    palette: {
      mode: prefersDarkMode ? "dark" : "light"
    }
  });

  const [token, setToken] = useLocalStorage("token");
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  const manageUser = {
    user: currentUser,
    async register(data) {
      const newToken = await JoblyApi.registerUser(data);
      setToken(newToken);
    },
    async login(data) {
      const newToken = await JoblyApi.loginUser(data);
      setToken(newToken);
    },
    logout() {
      setToken(null);
      setCurrentUser(null);
      navigate(`/`);
    },
    async update(data) {
      const userData = await JoblyApi.updateUser(currentUser.username, data);
      setCurrentUser(userData);
    },
    async applyJob(id) {
      const {username} = currentUser;
      await JoblyApi.applyJob(username, id);
      await updateUserData(username);
    }
  };

  async function updateUserData(username) {
    const userData = await JoblyApi.getUser(username);
    setCurrentUser(userData);
  }

  useEffect(() => {
    (async () => {
      JoblyApi.token = token;
      if (!token) return;
      const payload = jwt.decode(token);
      if (!payload) return;
      const {username} = payload;
      await updateUserData(username);
    })();
  }, [token]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <UserContext.Provider value={manageUser}>
          <AppRoutes />
        </UserContext.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
