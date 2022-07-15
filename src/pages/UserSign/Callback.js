import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import qs from "qs";
import { IP } from "../../config";

const Callback = () => {
  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URI = "http://localhost:3000/";
  const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
  const code = new URL(window.location.href).searchParams.get("code");
  const navigate = useNavigate();

  const getKaKaoToken = async () => {
    const payload = qs.stringify({
      grant_type: "authorization_code",
      client_id: REST_API_KEY,
      redirect_uri: REDIRECT_URI,
      code: code,
      client_secret: CLIENT_SECRET,
    });

    await axios
      .post("https://kauth.kakao.com/oauth/token", payload)
      .then(res => {
        localStorage.setItem("kakaotoken", res.data.access_token);
      });

    const kakaoToken = localStorage.getItem("kakaotoken");
    await axios
      .get(`${IP}/users/signin`, {
        headers: { Authorization: kakaoToken },
      })
      .then(res => {
        localStorage.setItem("Authorization", res.config.headers.Authorization);
        localStorage.removeItem("kakaotoken");
        navigate("/");
      });
  };

  useEffect(() => {
    getKaKaoToken();
  }, []);

  return null;
};
export default Callback;
