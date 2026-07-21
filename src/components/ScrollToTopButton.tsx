import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTopButton() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 400);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    onClick={scrollToTop}
                    initial={{ opacity: 0, y: 30, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 30, scale: 0.8 }}
                    transition={{ duration: 0.25 }}
                    className="
            fixed
            bottom-8
            right-8
            z-50
            w-14
            h-14
            rounded-full
            bg-white
            text-black
            shadow-xl
            flex
            items-center
            justify-center
            transition-all
            duration-300
            hover:bg-black
            hover:text-white
            hover:scale-110
          "
                    aria-label="Scroll to top"
                >
                    <ArrowUp size={22} />
                </motion.button>
            )}
        </AnimatePresence>
    );
}