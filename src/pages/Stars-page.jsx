import { Stars } from "../cmps/stars";
import { motion } from "framer-motion";

export function StarsPage() {

    return <section style={{ height: 150 + 'vh' }} className="stars-page">
        <Stars />
        <motion.h1
                animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
                transition={{
                    duration: 5,
                    delay: 0.3,
                    ease: [0.5, 0.71, 1, 1.5],
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileHover={{ scale: 1.2 }}
            >
                Framer Motion
            </motion.h1>
    </section>
}