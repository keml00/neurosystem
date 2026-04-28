import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function TelegramChat() {
  const [isOpen, setIsOpen] = useState(false);
  const telegramUsername = 'keml00'; // твой Telegram username

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-8 z-40 w-16 h-16 bg-gradient-to-br from-[#00d9b8] to-[#0088cc] rounded-full shadow-lg shadow-[#00d9b8]/50 flex items-center justify-center hover:scale-110 transition-transform group"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="w-6 h-6 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="message"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <MessageCircle className="w-6 h-6 text-white" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse animation */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-[#00d9b8] animate-ping opacity-20" />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-44 right-8 z-40 w-80 bg-ral-grey/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#00f2ff] to-[#0088cc] p-4">
              <h3 className="text-white font-bold text-sm">Написать в Telegram</h3>
              <p className="text-white/80 text-xs mt-1">Ответим в течение 5 минут</p>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <p className="text-white/60 text-sm">
                Свяжитесь с нами напрямую в Telegram для быстрой консультации по вашему проекту.
              </p>

              <a
                href={`https://t.me/${telegramUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 px-4 bg-gradient-to-r from-[#00f2ff] to-[#0088cc] text-white text-center font-bold text-sm rounded-lg hover:shadow-lg hover:shadow-[#00f2ff]/30 transition-all"
              >
                Открыть чат в Telegram
              </a>

              <div className="flex items-center gap-2 text-xs text-white/40">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>Обычно отвечаем за 5 минут</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
