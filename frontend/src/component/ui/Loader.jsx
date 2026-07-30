// const Loader = ({ text = "Loading...", fullScreen = false }) => {
//   const content = (
//     <div className="flex flex-col items-center justify-center gap-4 py-10">
//       {/* Spinner */}
//       <div className="relative">
//         <div className="w-14 h-14 rounded-full border-4 border-gray-200"></div>

//         <div className="absolute inset-0 w-14 h-14 rounded-full border-4 border-blue-600 border-t-transparent animate-spin"></div>
//       </div>

//       {/* Loading Text */}
//       <div className="text-center">
//         <h3 className="text-lg font-semibold text-gray-700">{text}</h3>

//         <p className="text-sm text-gray-500 mt-1">Please wait a moment...</p>
//       </div>
//     </div>
//   );

//   if (fullScreen) {
//     return (
//       <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">
//         {content}
//       </div>
//     );
//   }

//   return <div className="w-full flex justify-center">{content}</div>;
// };

// export default Loader;

import { FiLoader } from "react-icons/fi";

const Loader = ({ text = "Loading...", fullScreen = false }) => {
  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/80 backdrop-blur-sm">
        <div className="flex flex-col items-center gap-4">
          <FiLoader size={42} className="animate-spin text-blue-600" />

          <p className="text-lg font-medium text-gray-700">{text}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center py-10">
      <div className="flex flex-col items-center gap-3">
        <FiLoader size={34} className="animate-spin text-blue-600" />

        <p className="text-sm text-gray-500">{text}</p>
      </div>
    </div>
  );
};

export default Loader;