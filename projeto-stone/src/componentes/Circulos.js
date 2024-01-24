import styles from "../componentes/circulo.module.css"

function Circulos(){
    return (
        <div>
            <svg className={styles.circulo} xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
            <circle cx="18" cy="18" r="18" fill="#00AB63"/>
            </svg>

            <svg className={styles.circulo2} xmlns="http://www.w3.org/2000/svg" width="104" height="104" viewBox="0 0 104 104" fill="none">
            <circle opacity="0.2" cx="52" cy="52" r="50" stroke="#008B57" stroke-width="4"/>
            </svg>

            <svg className={styles.circulo3} xmlns="http://www.w3.org/2000/svg" width="213" height="213" viewBox="0 0 213 213" fill="none">
            <circle opacity="0.7" cx="106.5" cy="106.5" r="104.5" stroke="#008B57" stroke-width="4"/>
            </svg>

            <svg className={styles.circulo4} xmlns="http://www.w3.org/2000/svg" width="322" height="322" viewBox="0 0 322 322" fill="none">
            <circle opacity="0.2" cx="161" cy="161" r="159" stroke="#008B57" stroke-width="4"/>
            </svg>
        </div>
    )
}

export default Circulos