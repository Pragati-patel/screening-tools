import React from "react";
import styles from "./style.module.css";
import Container from "@/components/common/Container";
import Image from "next/image";
import { Images } from "@/assets/Images";

export default function BestFeatures() {
  const subheading = "Reliable AI screening and unbiased hiring";
  const heading = "Best features of Sourcebae’s AI algorithm";
  const features = [
    "Comprehensive Candidate Report",
    "AI Screening Summary",
    "Detailed Proctoring Report",
    "Technical & Language Assessment",
    "Tailored Assessments to JD",
    "Transparent Evaluation & Review",
    "Seamless Integration with any ATS",
  ];
  return (
    <div className={styles.bg_image}>
    <Container>
      <div className={styles.parant}>
        <div className="flex flex-col items-center">
          <p className="sub_heading">{subheading}</p>
          <h3 className="heading">{heading}</h3>
        </div>
        <div className={styles.content_wrapper}>
          <div className={styles.left_part}>
            {features?.map((item, index) => {
              return (
                <div className={styles.item_wrapper} key={index.toString()}>
                  <p className={styles.round_index}>
                    <span className={styles.round_num}>{index + 1}</span>
                  </p>
                  <p className={"description !text-120A2C !font-extrabold"}>
                    {item}
                  </p>
                </div>
              );
            })}
          </div>
          <div className={styles.right_part}>
            <Image className={styles.feature_image} src={Images.feature1} alt="feature_image"/>
          </div>
        </div>
      </div>
    </Container>
    </div>
  );
}
