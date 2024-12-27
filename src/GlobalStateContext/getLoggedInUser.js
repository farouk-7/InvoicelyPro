import { errorNotifier, successNotifier } from "../components/notifier";
import axiosInstance, { AUTH_ROUTES } from "../service/api";

export const getAdminDetails = async (setAdminData) => {
  try {
    const {
      data: { data },
    } = await axiosInstance.get(AUTH_ROUTES.GET_LOGGED_IN_ADMIN);
    setAdminData(data);
    // console.log("ADMIN DATA", data);
    return data;
  } catch (e) {
    if (e?.response) {
      errorNotifier(
        console.log(
          e.response?.data?.message || e.response?.data?.data?.message
        )
      );
    } else {
      errorNotifier("Network Error, please check your internet connections");
    }
  }
};




export const updateAdminDetails = async (payload) => {
  try {
    await axiosInstance.put(
      AUTH_ROUTES.UPDATE_ADMIN_DETAILS(payload?.accountDetails?.id),
      payload
    );

    successNotifier("Details updated successfully");
  } catch (e) {
    if (e?.response) {
      errorNotifier(
        console.log(
          e.response?.data?.message || e.response?.data?.data?.message
        )
      );
    } else {
      errorNotifier("Network Error, please check your internet connections");
    }
  }
};

export const updateAdminPassword = async (payload) => {
  try {
    await axiosInstance.put(AUTH_ROUTES.UPDATE_PASSWORD, payload);

    successNotifier("Password updated successfully");
  } catch (e) {
    if (e?.response) {
      errorNotifier(
        console.log(
          e.response?.data?.message || e.response?.data?.data?.message
        )
      );
    } else {
      errorNotifier("Network Error, please check your internet connections");
    }
  }
};
