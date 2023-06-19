import styles from "./style.module.css"

export const Modal = ({children, setIsOpen}) => {
    return(
        <div className={styles.modalOverlay} role="dialog">
            <div className={styles.modalBox}>
                <button className={styles.closeButton} onClick={() => setIsOpen(false)}>Fechar</button>
                {children}
            </div>
        </div>
    )
}