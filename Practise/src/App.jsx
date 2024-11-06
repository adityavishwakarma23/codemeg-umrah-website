import { Route, Routes } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import {    LoginPage, Homepage, PackageMainPage,  PackageDetailPAge} from "./RoutesMain";
import { Footer, Header } from "./components/common";
import Packagenthost from "./components/Packdetail/subcomponent/Packagenthost";
import { PackagenthostPage } from "./components/Packdetail/subcomponent";

const App=()=> {
  const routes = useRoutes([
    { path: "/login", element: <LoginPage /> },
    // { path: "/forgot-password", element: <ForgotPasswordPage /> },
    // { path: "/select-user", element: <SelectUserPage /> },
    {
      path: "/*",
      element: (
        <div class="grid-container">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" index element={<Homepage />} />
            <Route path="/packagemain" index element={<PackageMainPage />} />
            <Route path="/packagedatal" index element={< PackageDetailPAge />} />
          
          </Routes>
        </main>
        <Footer />
      </div>
      ),
    },
  ])
  return (
    <>
      {routes}
    </>
  );
}

export default App
