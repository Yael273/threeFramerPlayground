import { motion } from "framer-motion"
import { useRef } from "react"

export function Motion() {

    const list = { hidden: { opacity: 0 } }
    const item = { hidden: { x: -10, opacity: 0 } }
    const scrollRef = useRef(null)

    return <section className="motion">

        {/* //Animation */}
        <motion.div
            className="box"
            animate={{ x: 100 }}
        />


        {/* //Dragging */}
        {/* <motion.div
               className="box"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.1 }}
            drag="x"
            dragConstraints={{ left: -100, right: 100}}
        /> */}

        {/* //List */}
        {/* <motion.ul animate="hidden" variants={list}>
            <motion.li variants={item} />
            <motion.li variants={item} />
            <motion.li variants={item} />
        </motion.ul> */}

        {/* //Scroll */}
        {/* <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <h1>hello</h1>
        </motion.div> */}

        <div ref={scrollRef} style={{ overflowY: "scroll" , height: 100 + 'vh'}}>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ root: scrollRef }}
            >
                <h1>hello</h1>
            </motion.div>
        </div>

    </section>
}