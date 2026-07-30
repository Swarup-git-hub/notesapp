// import { useEffect } from "react";
// import {
//   FiCheckCircle,
//   FiAlertCircle,
//   FiInfo,
//   FiX,
// } from "react-icons/fi";

// const variants = {
//   success: {
//     icon: <FiCheckCircle size={22} />,
//     border: "border-green-500",
//     iconColor: "text-green-600",
//     title: "Success",
//   },
//   error: {
//     icon: <FiAlertCircle size={22} />,
//     border: "border-red-500",
//     iconColor: "text-red-600",
//     title: "Error",
//   },
//   info: {
//     icon: <FiInfo size={22} />,
//     border: "border-blue-500",
//     iconColor: "text-blue-600",
//     title: "Information",
//   },
// };

// const Toast = ({
//   show,
//   type = "success",
//   message = "",
//   duration = 3000,
//   onClose,
// }) => {
//   useEffect(() => {
//     if (!show) return;

//     const timer = setTimeout(() => {
//       onClose?.();
//     }, duration);

//     return () => clearTimeout(timer);
//   }, [show, duration, onClose]);

//   if (!show) return null;

//   const toast = variants[type] || variants.success;

//   return (
//     <div className="fixed top-6 right-6 z-[100] animate-[slideIn_.3s_ease]">

//       <div
//         className={`w-[360px] bg-white rounded-2xl shadow-2xl border-l-4 ${toast.border}`}
//       >
//         <div className="flex items-start gap-4 p-5">

//           <div className={toast.iconColor}>
//             {toast.icon}
//           </div>

//           <div className="flex-1">

//             <h3 className="font-semibold text-gray-800">
//               {toast.title}
//             </h3>

//             <p className="text-sm text-gray-500 mt-1">
//               {message}
//             </p>

//           </div>

//           <button
//             onClick={onClose}
//             className="text-gray-400 hover:text-gray-700 transition"
//           >
//             <FiX size={18} />
//           </button>

//         </div>

//         {/* Progress Bar */}
//         <div className="h-1 bg-gray-100 overflow-hidden rounded-b-2xl">
//           <div
//             className="h-full bg-blue-600 animate-[progress_linear_forwards]"
//             style={{
//               animationDuration: `${duration}ms`,
//             }}
//           />
//         </div>
//       </div>

//       <style>{`
//         @keyframes slideIn {
//           from {
//             opacity:0;
//             transform:translateX(60px);
//           }
//           to {
//             opacity:1;
//             transform:translateX(0);
//           }
//         }

//         @keyframes progress {
//           from {
//             width:100%;
//           }
//           to {
//             width:0%;
//           }
//         }

//         .animate-\\[progress_linear_forwards\\]{
//           animation-name:progress;
//           animation-timing-function:linear;
//           animation-fill-mode:forwards;
//         }
//       `}</style>

//     </div>
//   );
// };

// export default Toast;

import { useEffect } from "react";
import { FiCheckCircle, FiAlertCircle, FiInfo, FiX } from "react-icons/fi";

const Toast = ({
  show,
  type = "success",
  message,
  duration = 3000,
  onClose,
}) => {
  useEffect(() => {
    if (!show) return;

    const timer = setTimeout(() => {
      onClose?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [show, duration, onClose]);

  if (!show) return null;

  const toastStyles = {
    success: {
      bg: "bg-green-50",
      border: "border-green-200",
      text: "text-green-700",
      icon: <FiCheckCircle className="text-green-600" size={22} />,
    },
    error: {
      bg: "bg-red-50",
      border: "border-red-200",
      text: "text-red-700",
      icon: <FiAlertCircle className="text-red-600" size={22} />,
    },
    info: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      text: "text-blue-700",
      icon: <FiInfo className="text-blue-600" size={22} />,
    },
  };

  const style = toastStyles[type] || toastStyles.success;

  return (
    <div className="fixed right-6 top-6 z-[9999] animate-slide-in">
      <div
        className={`flex min-w-[320px] items-center justify-between gap-4 rounded-2xl border px-5 py-4 shadow-xl ${style.bg} ${style.border}`}
      >
        <div className="flex items-center gap-3">
          {style.icon}

          <p className={`text-sm font-medium ${style.text}`}>{message}</p>
        </div>

        <button
          onClick={onClose}
          className="text-gray-500 transition hover:text-gray-700"
        >
          <FiX size={18} />
        </button>
      </div>
    </div>
  );
};

export default Toast;