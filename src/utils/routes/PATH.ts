const PATH = {
  // API URL
  API: import.meta.env.VITE_API_BASE_URL,

  // UnAuthorized
  LOGIN: "/login",

  // Protected
  HOME: "/",

  // End Of Path
} as const;

Object.freeze(PATH);
export default PATH;
