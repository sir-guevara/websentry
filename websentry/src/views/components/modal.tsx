import { raw } from "hono/html";

const Modal = (props: { children?: any; title: string }) => {
  return (
    <>
      {raw(`
    <div x-show="openModal" id="modal" class=" fixed inset-0 overflow-y-auto">

      <div class="flex items-center justify-center min-h-screen">
        <div class="fixed inset-0 bg-black opacity-50"  @click="toggleModal"></div>

        <div class="bg-white p-6 rounded-md shadow-md w-96 z-20 m-10">
          <button
            class="absolute top-4 right-4 text-gray-600 hover:text-gray-800" @click="openModal = false" > &times;
          </button>

          <h1 class="text-2xl font-bold mb-4">${props.title}</h1>
          ${props.children}
        </div>
      </div>
    </div>`)}
    </>
  );
};

export default Modal;
