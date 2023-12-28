import { TOKEN } from "@/constants/token";
import { URL } from "@/constants/url";
import { httpClient } from "./httpClient";

let reissuePromise: Promise<Response> | null = null;

export const reissueToken = async () => {
  if (reissuePromise !== null) {
    return reissuePromise;
  }

  reissuePromise = fetch(URL.PUBLIC_BASE_URL + "/tokens/refresh", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization-Refresh": `Bearer ${localStorage.getItem(
        TOKEN.REFRESH_TOKEN
      )}`,
    },
  });

  const response = await reissuePromise;
  reissuePromise = null;

  if (!response.ok) {
    throw new Error("네트워크 통신 중 에러가 발생했습니다.");
  }

  return response;
};

export const getGoogleToken = async (code: string) => {
  return await httpClient.post(
    `https://oauth2.googleapis.com/token?grant_type=authorization_code&client_id=${
      import.meta.env.VITE_GOOGLE_CLIENT_ID
    }&redirect_uri=${import.meta.env.VITE_GOOGLE_REDIRECT_URI}&client_secret=${
      import.meta.env.VITE_GOOGLE_KEY
    }&code=${code}`
  );
};

export const fetchGoogleUserInfo = async (accessToken: string) => {
  return await httpClient.get(
    `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`
  );
};
