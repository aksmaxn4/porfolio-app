import {motion, AnimatePresence} from 'framer-motion'

const Modal = ({isOpen, onClose}) => {
    

  return (
    <AnimatePresence>
    {isOpen && (
        <motion.div 
        initial={{
            x: "25vw"
        }}
        animate={{
            x: 0,
            transition: {
                duration: 0.4,
                ease: 'easeInOut',
                mass: 2,
                stiffness: 230,
            }
        }}
        exit={{
            x: "25vw"
        }}
        className="modal-background">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>
                    x
                </button>
                <p className="modal-text">
                    E-Mail sent succesfully!
                </p>
            </div>
        </motion.div>
    )}
    
    </AnimatePresence>
  )
}

export default Modal