import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

export const Header: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <NavLink className={styles.logo} to="/">
            <img alt="Gamba logo" src="/logo-2.svg" />
          </NavLink>
        </div>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <div className={styles.externalLinks}>
            <a href="https://twitter.com/broostersol" target="_blank" rel="noreferrer">
              Twitter
            </a>
            <a href="https://discord.com/invite/broosters" target="_blank" rel="noreferrer">
              Discord
            </a>
            <a href="SOON" target="_blank" rel="noreferrer">
           <font color="blue">   POINTS</font>
            </a>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}
