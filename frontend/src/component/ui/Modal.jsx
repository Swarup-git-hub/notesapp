import { useEffect } from "react";
import { FiX } from "react-icons/fi";

const Modal = ({
  children,
  onClose,
  title,
  size = "max-w-2xl",
}) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose?.();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">

      {/* Overlay */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
      />

      {/* Modal */}
      <div
        className={`relative w-full ${size}
        bg-white rounded-3xl shadow-2xl
        border border-gray-100
        animate-[fadeIn_.25s_ease]
        overflow-hidden`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">

          <div>
            {title && (
              <h2 className="text-xl font-bold text-gray-800">
                {title}
              </h2>
            )}
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full hover:bg-gray-100 transition flex items-center justify-center"
          >
            <FiX size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="max-h-[75vh] overflow-y-auto p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;