import styles from './styles.module.scss';
const Filters = () => {
    return (
        <div className={styles.Index}>
            <div className={styles.Item}>
                <button className={styles.Button}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.333344 7.00001L1.50834 8.17501L6.16668 3.52501V13.6667H7.83334V3.52501L12.4833 8.18334L13.6667 7.00001L7.00001 0.333344L0.333344 7.00001Z" fill="black" fill-opacity="0.56" />
                    </svg>
                </button>
                <span>Название</span>
            </div>
            <div className={styles.Item}>
                <span>Язык</span>
            </div>
            <div className={styles.Item}>
                <span>Число форков</span>
            </div>
            <div className={styles.Item}>
                <span>Число звезд</span>
            </div>
            <div className={styles.Item}>
                <span>Дата обновления</span>
            </div>
        </div>
    )
}

export default Filters