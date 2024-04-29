import React from 'react'
import styles from './style.module.css'
import Container from '@/components/common/Container'
import Image from 'next/image';
import { Images } from '@/assets/Images';

export default function HowItWorks() {
    const subheading = "Ready to Implement AI-Powered Candidate Screening?";
    const heading1 = "Discover How It ";
    const specialHeading = "Works";
  return (
    <div className={styles.parant}>
        <div className={styles.bg_image_wrapper}>

        <Image src={Images.howWorkBg} alt='how-it-work-bg' className={styles.how_it_bg}/>
        </div>
        <Container otherStyles={styles.content_wrapper}>
        <div className="sub_heading">{subheading}</div>
          <h3 className={styles.heading}>
            {heading1} <span className="gradiant_color">{specialHeading}</span>
          </h3>
          <div>
            <Image src={Images.howItWork} alt='how it work' className={styles.img}/>
          </div>
        </Container>
    </div>
  )
}
