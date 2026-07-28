import { useEffect } from "react";

import {
  hideNotification,
  clearAccessDenied,
  clearAuthExpired,
} from "../../store/slices/uiSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

function NotificationBanner() {
  const dispatch = useAppDispatch();

  const { visible, message, type } = useAppSelector(
    (state) => state.ui.notification,
  );

  useEffect(() => {
    if (!visible) return;

    const timer = setTimeout(() => {
      dispatch(hideNotification());

      dispatch(clearAuthExpired());
      dispatch(clearAccessDenied());
    }, 4000);

    return () => clearTimeout(timer);
  }, [visible, dispatch]);

  if (!visible) return null;

  const styles = {
    success: "border-green-200 bg-green-50 text-green-700",
    error: "border-red-200 bg-red-50 text-red-700",
    warning: "border-yellow-200 bg-yellow-50 text-yellow-700",
    info: "border-blue-200 bg-blue-50 text-blue-700",
  };

  return (
    <div className="animate-in slide-in-from-top-2 fixed top-5 right-5 z-9999 duration-300">
      <div
        className={`min-w-[320px] rounded-xl border px-5 py-4 shadow-lg ${styles[type]}`}
      >
        <p className="text-sm font-medium">{message}</p>
      </div>
    </div>
  );
}

export default NotificationBanner;
