const Modal = ({ modal, setModal }) => {
  const { type, message, onConfirm } = modal;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl p-6 max-w-sm text-center">
        {type === "success" && (
          <div className="text-green-600 text-4xl mb-3">✅</div>
        )}
        {type === "error" && (
          <div className="text-red-600 text-4xl mb-3">❌</div>
        )}
        {type === "confirm" && (
          <div className="text-amber-500 text-4xl mb-3">⚠️</div>
        )}
        <p className="text-gray-800 text-lg mb-4">{message}</p>

        {type === "confirm" ? (
          <div className="flex justify-center gap-3">
            <button
              onClick={() => {
                onConfirm();
                setModal({ open: false });
              }}
              className="px-4 py-2 bg-red-600 text-white rounded-lg"
            >
              Confirm
            </button>
            <button
              onClick={() => setModal({ open: false })}
              className="px-4 py-2 bg-gray-300 rounded-lg"
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            onClick={() => setModal({ open: false })}
            className="px-4 py-2 bg-amber-600 text-white rounded-lg"
          >
            Close
          </button>
        )}
      </div>
    </div>
  );
};

export default Modal;
