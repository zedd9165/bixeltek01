'use client'

import {motion, AnimatePresence } from "framer-motion"
import { FaTimes } from "react-icons/fa"



export const MicrosoftBooking = ({ showBooking, setShowBooking }:any) => {
    return(
        <AnimatePresence>
        {showBooking && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setShowBooking(false)}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            />

            {/* Modal panel */}
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="fixed inset-4 md:inset-8 lg:inset-16 z-50 flex flex-col bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Modal header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 flex-shrink-0">
                <p className="text-[15px] font-bold text-gray-950 tracking-tight">Schedule an Appointment</p>
                <button
                  onClick={() => setShowBooking(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                  aria-label="Close"
                >
                  <FaTimes size={14} />
                </button>
              </div>

              {/* iframe */}
              <div className="flex-1 min-h-0">
                <iframe
                  src="https://outlook.office.com/book/Bixeltek1@bixeltekglobal.com/?ismsaljsauthenabled"
                  width="100%"
                  height="100%"
                  scrolling="yes"
                  style={{ border: 0, display: 'block' }}
                  title="Book an appointment with Bixeltek"
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    )

}