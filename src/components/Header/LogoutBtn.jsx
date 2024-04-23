import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logOutUser().then(() => {
      dispatch(logout());
    });
  };
  return (
    <button
      onClick={logoutHandler}
      className="bg-orange-600 outline-none rounded-md text-white font-medium"
    >
      Logout
    </button>
  );
};

export default LogoutBtn;
