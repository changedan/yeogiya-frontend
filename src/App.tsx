import { Fragment } from "react";
import LocationSearchNavbar from "./pages/diary/map/search/components/LocationSearchNavbar";
import MapNavbar from "./pages/diary/map/components/MapNavbar";
import Navbar from "@/components/@common/Navbar";
import { Outlet } from "react-router-dom";
import ProtectRoute from "./utils/ProtectRouter";
import ScrollToTop from "@/components/@common/ScrollToTop";

interface AppProps {
  layout?: "default" | "diaryMap" | "locationSearch" | "placeSearch" | "login";
}

const App = ({ layout = "default" }: AppProps) => {
  switch (layout) {
    case "diaryMap":
      return (
        <Fragment>
          <ScrollToTop />
          <MapNavbar />
          <ProtectRoute />
        </Fragment>
      );
    case "locationSearch":
      return (
        <Fragment>
          <ScrollToTop />
          <LocationSearchNavbar />
          <ProtectRoute />
        </Fragment>
      );
    case "placeSearch":
      return (
        <Fragment>
          <ScrollToTop />
          <Navbar type="placeSearch" />
          <Outlet />
        </Fragment>
      );
    case "login":
      return (
        <Fragment>
          <ScrollToTop />
          <Navbar type="default" />
          <ProtectRoute />
        </Fragment>
      );
    default:
      return (
        <Fragment>
          <ScrollToTop />
          <Navbar type="default" />
          <Outlet />
        </Fragment>
      );
  }
};

export default App;
