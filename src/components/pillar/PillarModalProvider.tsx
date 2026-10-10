"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { ButtonContactForm } from "@/sections/ButtonContactForm";

interface ModalContextType {
  openContactModal: () => void;
  closeContactModal: () => void;
  isModalOpen: boolean;
}

const ModalContext = createContext<ModalContextType>({
  openContactModal: () => {},
  closeContactModal: () => {},
  isModalOpen: false,
});

export const usePillarModal = () => useContext(ModalContext);

export default function PillarModalProvider({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openContactModal = () => setIsModalOpen(true);
  const closeContactModal = () => setIsModalOpen(false);

  return (
    <ModalContext.Provider value={{ openContactModal, closeContactModal, isModalOpen }}>
      {children}
      <ButtonContactForm isVisible={isModalOpen} onClose={closeContactModal} />
    </ModalContext.Provider>
  );
}

