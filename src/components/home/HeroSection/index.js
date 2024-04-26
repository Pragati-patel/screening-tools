import Container from "@/components/common/Container";
import React from "react";
import styles from "./style.module.css";
import Button from "@/components/common/Button";
import Image from "next/image";
import heroBanner from "@/assets/hero-banner.svg";

export default function HeroSection() {
  const subheading = "Boost hiring with AI screening";
  const heading1 = "Save time and reduce hassle with our easy-to-use ";
  const specialHeading = "AI-powered";
  const heading2 = " candidate screening tool.";
  const description =
    "Enhance your recruitment workflow with our advanced AI-based screening tool. Forget about manual candidate screening and time-consuming follow-ups. Our solution automates the entire process, selecting the most relevant interview questions, conducting assessments, and systematically scoring and ranking each candidate to streamline your hiring decisions";

  return (
    <>
      <div className={styles.parant}>
        <Container otherStyles={`${styles.wrapper}`}>
          <div className="sub_heading lg:!text-18">{subheading}</div>
          <h1 className={styles.main_heading}>
            {heading1} <span className="gradiant_color">{specialHeading}</span>
            {heading2}
          </h1>
          <div className={"description text-center"}>{description}</div>
          <Button otherStyles={"mt-[36px]"}>BOOK A FREE DEMO</Button>
        </Container>
      </div>

      <Container>
        <div className={styles.img_wrapper}>
          <Image src={heroBanner} alt="hero-banner" />
        </div>
      </Container>
    </>
  );
}
