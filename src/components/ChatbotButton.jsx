import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export default function ChatbotButton() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: "Hello! 👋 Welcome to Smyluxe Dental. How can we help you today?", isBot: true }
    ]);
    const [inputValue, setInputValue] = useState("");
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen]);

    const handleSend = () => {
        if (!inputValue.trim()) return;

        // Add user message
        const newMsg = { id: Date.now(), text: inputValue, isBot: false };
        setMessages(prev => [...prev, newMsg]);
        setInputValue("");

        // Simulate bot response
        setTimeout(() => {
            setMessages(prev => [...prev, {
                id: Date.now() + 1,
                text: "Thanks for reaching out! One of our dental specialists will get back to you shortly.",
                isBot: true
            }]);
        }, 1000);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed bottom-24 right-6 w-80 sm:w-96 h-[400px] bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-neutral-200 dark:border-neutral-800"
                    >
                        {/* Header */}
                        <div className="bg-[#21c063] p-4 text-white flex justify-between items-center shadow-md z-10">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/30 shadow-sm relative shrink-0">
                                    <img
                                        src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200&auto=format&fit=crop"
                                        alt="Support Agent"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute bottom-0.5 right-0.5 w-2.5 h-2.5 bg-green-400 border border-white rounded-full"></div>
                                </div>
                                <div>
                                    <h3 className="font-bold font-inter leading-tight">Sarah from Support</h3>
                                    <p className="text-xs text-white/90 font-inter">Typically replies instantly</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-white hover:bg-white/20 p-1.5 rounded-full transition-colors"
                                aria-label="Close Chat"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 p-4 bg-neutral-50 dark:bg-neutral-950 overflow-y-auto flex flex-col gap-3 font-inter">
                            {messages.map((msg) => (
                                <div key={msg.id} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                                    <div className={`p-3 rounded-2xl shadow-sm max-w-[85%] text-sm ${msg.isBot
                                            ? 'bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 rounded-tl-sm border border-neutral-100 dark:border-neutral-800'
                                            : 'bg-[#21c063] text-white rounded-tr-sm'
                                        }`}>
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-3 bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 flex items-center gap-2">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Type your message..."
                                className="flex-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 px-4 py-2.5 rounded-full text-sm font-inter focus:outline-none focus:ring-2 focus:ring-[#21c063]/50"
                            />
                            <button
                                onClick={handleSend}
                                disabled={!inputValue.trim()}
                                className="w-10 h-10 bg-[#21c063] disabled:opacity-50 disabled:cursor-not-allowed rounded-full flex flex-shrink-0 items-center justify-center text-white hover:bg-[#1da856] transition-colors shadow-sm"
                            >
                                <Send size={18} className="ml-0.5" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="fixed bottom-24 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#21c063] text-white rounded-full shadow-lg hover:shadow-[#21c063]/40 cursor-pointer border-2 border-white dark:border-neutral-900"
                aria-label="Open Chat"
            >
                {isOpen ? (
                    <X size={30} className="text-white" />
                ) : (
                    <MessageCircle size={32} fill="white" className="text-white mt-0.5" />
                )}
            </motion.button>
        </>
    );
}
