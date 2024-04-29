import Container from "@/components/common/Container";
import React from "react";
import styles from "./style.module.css";
import Image from "next/image";
import { Images } from "@/assets/Images";

export default function Revolutionize() {
  const subheading = "Automate Candidate Screening, Scoring, and Filtering";
  const heading =
    "Revolutionize Your Recruitment with SourceBae's AI-Driven Accuracy";
  const description =
    "SourceBae utilizes advanced AI technology to meticulously evaluate resumes, pinpointing the ideal candidates for your positions with precision.";
  return (<>
    <div className={styles.bg_image}>
      <Container otherStyles={styles.parant}>
        <div className="sub_heading">{subheading}</div>
        <div className={"heading !text-fff"}>{heading}</div>
        <div className="description !text-fff">{description}</div>
      </Container>
    </div>
    <div className={styles.img_wrapper}>
        <Image src={Images.RevolutionizeImg} alt="revolutionize" className={styles.image}/>
    </div>
  </>
  );
}
