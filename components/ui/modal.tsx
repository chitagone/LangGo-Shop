"use client";

import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment } from "react";
import IconButton from "./icon-button";
import { X } from "lucide-react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  return (
    <Transition show={open} appear as={Fragment}>
      <Dialog as="div" className="relative z-20" onClose={onClose}>
        {/* Overlay */}
        <div
          className="fixed inset-0 bg-black bg-opacity-60"
          aria-hidden="true"
        />

        {/* Modal Content */}
        <div className="fixed inset-0 flex items-center justify-center p-4 text-center">
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <DialogPanel className="relative w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto overflow-hidden rounded-lg bg-white text-left shadow-lg ring-1 ring-gray-900/10">
              {/* Close Button */}
              <div className="absolute top-4 right-4 z-30">
                <IconButton onclick={onClose} icon={<X size={20} />} />
              </div>

              {/* Modal Body */}
              <div className="p-4 sm:p-6">{children}</div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
