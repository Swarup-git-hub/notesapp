import { FiAlertTriangle } from "react-icons/fi";

const ConfirmDialog = ({
  open,
  title = "Confirm Action",
  message = "Are you sure you want to continue?",
  confirmText = "Confirm",
  cancelText = "Cancel",
  confirmColor = "red",
  loading = false,
  onConfirm,
  onCancel,
}) => {
  if (!open) return null;

  const buttonColors = {
    red: "bg-red-600 hover:bg-red-700",
    blue: "bg-blue-600 hover:bg-blue-700",
    green: "bg-green-600 hover:bg-green-700",
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        onClick={onCancel}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
      />

      {/* Dialog */}
      <div className="relative w-full max-w-md rounded-3xl bg-white shadow-2xl animate-[fadeIn_.25s_ease] overflow-hidden">
        {/* Icon */}
        <div className="flex justify-center pt-8">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
            <FiAlertTriangle size={40} className="text-red-600" />
          </div>
        </div>

        {/* Content */}
        <div className="px-8 py-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>

          <p className="mt-3 text-gray-500 leading-relaxed">{message}</p>
        </div>

        {/* Footer */}
        <div className="flex gap-3 px-6 pb-6">
          <button
            onClick={onCancel}
            disabled={loading}
            className="flex-1 rounded-xl border border-gray-300 py-3 font-medium text-gray-700 transition hover:bg-gray-100 disabled:opacity-50"
          >
            {cancelText}
          </button>

          <button
            onClick={onConfirm}
            disabled={loading}
            className={`flex-1 rounded-xl py-3 font-medium text-white transition disabled:opacity-50 ${
              buttonColors[confirmColor]
            }`}
          >
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                Processing...
              </div>
            ) : (
              confirmText
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;