import { CATEGORY } from "./category";

const PUBLIC_BASE_URL = `${import.meta.env.VITE_PUBLIC_URL_KEY}`;
const BASE_URL = `${import.meta.env.VITE_BASE_URL_KEY}`;

const URLS = {
  // Public
  SIGN_UP: `${import.meta.env.VITE_PUBLIC_URL_KEY}${CATEGORY.MEMBERS}/sign-up`, // 회원가입
  CHECK_EMAIL: `${import.meta.env.VITE_PUBLIC_URL_KEY}${
    CATEGORY.MEMBERS
  }/email-exists`, // 이메일 중복 확인
  CHECK_ID: `${import.meta.env.VITE_PUBLIC_URL_KEY}${
    CATEGORY.MEMBERS
  }/id-exists`, // 아이디 중복 확인
  CHECK_NICKNAME: `${import.meta.env.VITE_PUBLIC_URL_KEY}${
    CATEGORY.MEMBERS
  }/nickname-exists`, // 닉네임 중복 확인
  FIND_ID: `${import.meta.env.VITE_PUBLIC_URL_KEY}${CATEGORY.MEMBERS}/find-id`, // 아이디 찾기
  LOGIN: `${import.meta.env.VITE_PUBLIC_URL_KEY}${CATEGORY.MEMBERS}/login`, // 로그인
  FIND_PW: `${import.meta.env.VITE_PUBLIC_URL_KEY}${
    CATEGORY.MEMBERS
  }/send-password-reset-email`, // 비밀번호 재설정 이메일 발송
  RESET_PW: `${import.meta.env.VITE_PUBLIC_URL_KEY}${
    CATEGORY.MEMBERS
  }/reset-password`, // 비밀번호 재설정

  // Auth
  DIARY_LIST: `${import.meta.env.VITE_AUTH_URL_KEY}/diaries`, // 일기 목록
  USER_INFO: `${import.meta.env.VITE_AUTH_URL_KEY}${CATEGORY.MEMBERS}`, // 회원정보
  CHANGE_NICKNAME: `${import.meta.env.VITE_AUTH_URL_KEY}${
    CATEGORY.MEMBERS
  }/change-nickname`, // 닉네임 변경
  USER_WITHDRAW: `${import.meta.env.VITE_AUTH_URL_KEY}${
    CATEGORY.MEMBERS
  }/withdraw`, // 회원탈퇴
  CHECK_PW: `${import.meta.env.VITE_AUTH_URL_KEY}${
    CATEGORY.MEMBERS
  }/check-password`, // 현재 비밀번호 확인
  AUTH_RESET_PW: `${import.meta.env.VITE_AUTH_URL_KEY}${
    CATEGORY.MEMBERS
  }/reset-password`, // 로그인한 유저 비밀번호 변경

  // Search
  PLACE_SEARCH: `${import.meta.env.VITE_PUBLIC_URL_KEY}/search/places`, // 장소 검색
  SEARCH_DETAIL: `${import.meta.env.VITE_PUBLIC_URL_KEY}/search/places/details`, // 장소 상세 검색
  LOCATION_SEARCH: `${import.meta.env.VITE_PUBLIC_URL_KEY}/search/places/kakao`, // 위치 검색
};

const LOGIN = {
  GOOGLE_LOGIN: `${BASE_URL}/oauth2/authorization/google`,
  KAKAO_LOGIN: `${BASE_URL}/oauth2/authorization/kakao`,
};

export const URL = {
  PUBLIC_BASE_URL,
  BASE_URL,
  ...LOGIN,
  ...URLS,
} as const;
