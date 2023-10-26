import { NextPage } from 'next'
import styles from '../register/Register.module.scss'
import PageLayout from '@/components/globals/PageLayout/PageLayout'
import Link from 'next/link'

const Login: NextPage = () => {
  return (
    <PageLayout>
      <div className={styles.auth}>
        <div className={styles.auth__wrapper}>
          <div className={styles.auth__group}>
            <div className={styles.suptitle}>
              <h2>Welcome to Articles Hub</h2>
              <h5>
                У вас нет аккаунта?
                <Link href="/register">
                  <span>Зарегистрироваться</span>
                </Link>
              </h5>
            </div>
            <form action="/api/auth" className={styles.auth__form}>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" required />
              <label htmlFor="password">Пароль</label>
              <input type="password" name="password" required />
              <button className={styles.auth__btn}>Зарегистрироваться</button>
            </form>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default Login
