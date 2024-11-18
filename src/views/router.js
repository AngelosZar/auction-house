export default async function router(pathname) {
  switch (pathname) {
    case "/":
      await import("./home");
      break;
    case "/auth/sign_up/":
      await import("../views/auth/sign_up");
      break;
    case "/auth/sign_in/":
      await import("../views/auth/sign_in");
      break;
  }
}
