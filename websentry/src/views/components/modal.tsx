import type { FC } from "hono/jsx";

interface ModalProps {
  isOpen: boolean;
}

const Modal: FC<ModalProps> = ({ isOpen }) => {
  return (
    <div
      id="modal"
      class={`${isOpen ? "block" : "hidden"} fixed inset-0 overflow-y-auto`}
    >
      <div class="flex items-center justify-center min-h-screen">
        <div class="fixed inset-0 bg-black opacity-50"></div>

        <div class="relative bg-white p-8 max-w-md mx-auto rounded-md">
          <button
            class="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
            onClick={() => (isOpen = false)}
          >
            &times;
          </button>

          <h1 class="text-2xl font-bold mb-4">Modal Content</h1>
          <p>This is the content of the modal.</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
