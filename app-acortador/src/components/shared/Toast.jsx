import Swal from "sweetalert2";

export const Toast = (icon, message, width) => {
  const Toast = Swal.mixin({
    toast: true,
    position: width > 768 ? "top-right" : "top",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  return Toast.fire({
    icon,
    title: message,
  });
};

export default Toast;
