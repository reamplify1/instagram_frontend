
import styles from './page.module.css'
import UserSignup from '../components/auth/user/UserSignup'
export default function Home() {
  return (
    <main className={styles.main}>
    <div>
      <UserSignup/>
    </div>
      
    </main>
  )
}
