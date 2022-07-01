import React from 'react'
import styles from './Facility.module.css'

export default function Facility({icon, category, distance}) {
  return (
    <div className={`${styles.facility} flex gap-2 items-center mt-2.5 mr-2 px-3 py-2 bg-white drop-shadow-lg`}>
		<img src={`./${icon}.svg`} alt="icon" width={18} height={18} />
		<p className={`${styles.category} text-xs`}>{category}</p>
		<p className={`${styles.distance} text-secondary`}>{distance}</p>
	</div>
  )
}
