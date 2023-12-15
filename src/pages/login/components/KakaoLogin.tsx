import axios from "axios";
import { useEffect } from "react";

const KakaoLogin = () => {
  const { Kakao } = window;
  const CLIENT_ID = import.meta.env.VITE_KAKAO_CLIENT_ID as string;
  const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI as string;

  const searchParams = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get("code");
  };

  const getKakaoOauthToken = async (code: string) => {
    const data = new URLSearchParams({
      code,
      grant_type: "authorization_code",
      client_id: CLIENT_ID,
      redirect_uri: REDIRECT_URI,
    }).toString();

    try {
      return await axios.post("https://kauth.kakao.com/oauth/token", data, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      });
    } catch (error) {
      throw new Error(`${error}`);
    }
  };

  const getKakaoUserInfo = async (token: string) => {
    try {
      const data = await axios.get("https://kapi.kakao.com/v2/user/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (apiError) {
      console.error(apiError);
    }
  };

  useEffect(() => {
    const code = searchParams();
    if (code) {
      getKakaoOauthToken(code)
        .then(async (res) => {
          const { access_token } = res.data;
          const userInfo = await getKakaoUserInfo(access_token);
          console.log("userInfo", userInfo);
        })
        .then((res) => console.log(res))
        .catch((error) => console.error(error));
    } else {
      console.error("searchParams error");
    }
  }, []);

  return <></>;
};

export default KakaoLogin;
