import Header from "./Header"
import styles from "../styles/Layout.module.css"
export default function Layout(props) {
    return (
        <div className={styles.Layout}>
            <Header titulo = "Home Page"/>
        </div>
    )
}