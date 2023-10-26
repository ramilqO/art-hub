'use client'

import { NextPage } from 'next'
import styles from './Register.module.scss'
import PageLayout from '@/components/globals/PageLayout/PageLayout'
import Link from 'next/link'
import { useState } from 'react'

const Auth: NextPage = () => {
  const [data, setData] = useState({})

  return (
    <PageLayout>
      <div className={styles.auth}>
        <div className={styles.auth__wrapper}>
          <div className={styles.auth__group}>
            <div className={styles.suptitle}>
              <h2>Welcome to Articles Hub</h2>
              <h5>
                Уже есть аккаунт?
                <Link href="/login">
                  <span>Войти</span>
                </Link>
              </h5>
            </div>
            <form
              action="/api/register"
              method="POST"
              className={styles.auth__form}
            >
              <label htmlFor="email">Имя</label>
              <input type="text" name="name" required maxLength={30} />
              <label htmlFor="email">Email</label>
              <input type="email" name="email" required />
              <label htmlFor="password">Пароль</label>
              <input type="password" name="password" required />
              <label htmlFor="password">Пароль ещё раз</label>
              <input type="password" name="password" required />
              <button className={styles.auth__btn}>Зарегистрироваться</button>
            </form>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default Auth
