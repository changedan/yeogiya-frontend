import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "@/App";
import DiaryCreatePage from "@/pages/diary/create/DiaryCreatePage";
import DiaryListPage from "@/pages/diary/list/DiaryListPage";
import ErrorPage from "@/pages/ErrorPage";
import FindIdPage from "@/pages/find/id/FindIdPage";
import FindPwPage from "@/pages/find/pw/FindPwPage";
import GlobalStyle from "@/styles/GlobalStyle";
import JoinPage from "@/pages/join/JoinPage";
import KakaoLogin from "@/pages/login/components/KakaoLogin";
import LandingPage from "@/pages/home/LandingPage";
import LoginPage from "@/pages/login/LoginPage";
import MapPage from "@/pages/diary/map/MapPage";
import MapSearchPage from "@/pages/diary/map/search/MapSearchPage";
import MyPage from "@/pages/my/MyPage";
import MyPassword from "@/pages/my/password/MyPwPage";
import { PATH } from "./routes";
import ResetPwPage from "@/pages/reset/ResetPwPage";
import SearchListPage from "@/pages/search/list/SearchListPage";
import SearchPage from "@/pages/search/SearchPage";
import { ThemeProvider } from "@emotion/react";
import UpdateMyPwPage from "@/pages/my/password/UpdateMyPwPage";
import WithdrawalPage from "@/pages/my/withdrawal/WithdrawalPage";
import theme from "@/styles/theme";

export const router = createBrowserRouter([
  {
    path: PATH.HOME,
    element: <App layout="default" />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      { path: PATH.SEARCH, element: <SearchPage /> },
      {
        path: PATH.LOGIN,
        element: <LoginPage />,
      },
      {
        path: PATH.KAKAO_LOGIN,
        element: <KakaoLogin />,
      },
      {
        path: PATH.JOIN,
        element: <JoinPage />,
      },
      {
        path: PATH.FIND_PW,
        element: <FindPwPage />,
      },
      {
        path: PATH.RESET_PASSWORD,
        element: <ResetPwPage />,
      },
      {
        path: PATH.DIARY_LIST,
        element: <DiaryListPage />,
      },
      {
        path: PATH.DIARY_CREATE,
        element: <DiaryCreatePage />,
      },
      {
        path: PATH.MY,
        element: <MyPage />,
      },
      {
        path: PATH.MY_PASSWORD,
        element: <MyPassword />,
      },
      {
        path: PATH.MY_PASSWORD_UPDATE,
        element: <UpdateMyPwPage />,
      },
      {
        path: PATH.MY_WITHDRAWAL,
        element: <WithdrawalPage />,
      },
    ],
  },
  {
    path: PATH.DIARY_MAP,
    element: <App layout="diaryMap" />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <MapPage />,
      },
    ],
  },
  {
    path: PATH.DIARY_MAP_SEARCH,
    element: <App layout="locationSearch" />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <MapSearchPage />,
      },
    ],
  },
  {
    path: PATH.SEARCH_LIST,
    element: <App layout="placeSearch" />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <SearchListPage />,
      },
    ],
  },
]);

const Router = () => (
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
    <GlobalStyle />
  </ThemeProvider>
);

export default Router;
