import React from "react";
import Container from "@/components/common/Container";
import styles from './style.module.css'
import Button from "@/components/common/Button";

export default function BottomCTA() {
  return (
    <Container otherStyles={styles.parant}>
      <div className={styles.grey_heading}>Ready to Join the Smart Hiring</div>
      <div className={`gradiant_color ${styles.grediant_hading}`}>Revolution with Sourcebae?</div>
      <Button otherStyles={styles.cta_btn}>BOOK A FREE DEMO</Button>
    </Container>
  );
}
