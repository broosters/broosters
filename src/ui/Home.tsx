import React from 'react'
import { Button } from '../components/Button'
import { Section } from '../components/Section'
import { Icon } from '../components/Icon'
import styles from './Home.module.css'

export function Home() {
  return (
    <div className={styles.banner}>
      <Section>
        <h2>
          Broosters POINTS (SEASON 1)
        </h2>
        <p style={{ wordWrap: 'break-word' }}>
          Broosters Points is a reward system where the more you play, the more points you earn. Points is currently in beta and the leaderboard is not public. 
        </p>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Button
            as="a"
            color="white"
            href="https://www.broosters.xyz/flip"
            target="_self"
            icon={<Icon.ExternalLink />}
          >
            EARN POINTS
          </Button>
        </div>
      </Section>
    </div>
  )
}
