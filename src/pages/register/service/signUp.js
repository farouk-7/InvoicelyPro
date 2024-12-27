
import axiosInstance, {AUTH_ROUTES} from "../../../service/api";
import { ToastContainer, toast } from "react-toastify";





export const signUp = async (payload, setLoading) => {
    try {
      const {
        data: { data },
      } = await axiosInstance.post(AUTH_ROUTES?.SIGN_UP, payload);
      setLoading(false);
      console.log(data,"lll")
      // successNotifier("Vendor Created Successfully")
      // toast.success("User Created")
      // window.location.replace("/")
    } catch (e) {
      setLoading(false);
      if (e.response) {
        console.log(
          e.response?.data?.message || e.response?.data?.data?.message
        );
      } else {
        console.log("Network Error, please check your internet connections");
      }
    }
  };
  