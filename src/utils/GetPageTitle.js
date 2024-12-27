import { AUTHENTICATED_ROUTES } from "../constants/pageRoutes";

export const getPageTitle = (pathname) => {
  switch (pathname) {
    case AUTHENTICATED_ROUTES.dashboard:
      return "Dashboard";

    case AUTHENTICATED_ROUTES.invoice:
      return "Invoice";

      case AUTHENTICATED_ROUTES.settings:
        return "Settings";

    default:
      return "Details";
  }
};
