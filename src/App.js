import { createContext } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Cards from "./cards/components/Cards";
import CardPage from "./cards/pages/CardPage";
import Layout from "./layout/Layout";
import AboutPage from "./pages/AboutPage";
import { SnackbarProvider } from "./providers/SnackbarProvider";
import ThemeProvider from "./providers/ThemeProvider";
import Router from "./routes/Router";
import FatherComponent from "./sandbox/propTypes/FatherComponent";
import Counter from "./sandbox/stateHook/Counter";
import MyDetails from "./sandbox/stateHook/MyDetails";
import Todo from "./sandbox/stateHook/Todo";
<<<<<<< HEAD
import { UserProvider } from "./users/providers/UserProvider";

export const MyCon = createContext();
=======
import ThemeProvider from "./providers/ThemeProvider";
import SnackbarProvider from "./providers/SnackbarProvider";
import UserProvider from "./users/providers/UserProvider";
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15

function App() {
  return (
    <div>
      <BrowserRouter>
<<<<<<< HEAD
        <MyCon.Provider value={{ name: "tzach" }}>
          <ThemeProvider>
            <SnackbarProvider>
              <UserProvider>
                <Layout>
                  <Router />
                </Layout>
              </UserProvider>
            </SnackbarProvider>
          </ThemeProvider>
        </MyCon.Provider>
=======
        <SnackbarProvider>
          <ThemeProvider>
            <UserProvider>
              <Layout>
                <Router />
              </Layout>
            </UserProvider>
          </ThemeProvider>
        </SnackbarProvider>
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
      </BrowserRouter>
    </div>
  );
}

export default App;
