import React, {useState} from 'react'
import styles from './Users.module.css'


const Pagination = ({currentPage, changePages, allUsers, renderUsers, contPagination}) => {
    let pagesCount = Math.ceil(allUsers / renderUsers)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let [currentPortion, setCurrentPortion] = useState(1)

    const allPortion = Math.ceil(pagesCount / contPagination)
    const leftPortionZona = (currentPortion - 1) * contPagination + 1
    const rigthPortionZona = currentPortion * contPagination

    return (

        <div className={styles.paginationBody}>
            <div className={`${styles.btnPrev} ${styles.btn}`
            }>  {currentPortion > 1 && <button onClick={() => {
                setCurrentPortion(currentPortion - 1)
            }}>назад</button>}</div>
            <div>{pages.map((el) => {
                if (el >= leftPortionZona && el <= rigthPortionZona) {
                    return <span key={el} onClick={() => {
                        changePages(el)
                    }}
                                 className={currentPage === el ? `${styles.isActive} ${styles.pagination}` : `${styles.pagination}`}
                    >{el}</span>
                }
            })}</div>
            <div className={`${styles.btnNext} ${styles.btn}`}>
                {allPortion > currentPortion && <button onClick={() => {
                    setCurrentPortion(currentPortion + 1)
                }}>вперед</button>}</div>
        </div>

    )
}


export default Pagination





