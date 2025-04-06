import Link from 'next/link'
import styles from './page.module.css'

export const Header = () => {
    return(
        <div className={styles.headerMain} >
            <div className={styles.logo} ><h1><Link href='/' >BLOG APPLICATION</Link></h1></div>
            <div className={styles.navBar} >
                <nav>
                    <Link href='/blog/new' >Add</Link>
                    <Link href='/' >Edit</Link>
                </nav>
            </div>

        </div>
    )
}