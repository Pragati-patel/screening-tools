"use client"
import React, { useState } from "react";
import styles from "./style.module.css";
import Container from "@/components/common/Container";
import Image from "next/image";
import { Images } from "@/assets/Images";
import FindGreatForm from "./FindGreatForm";

export default function FindGreatTalent() {
  const subheading =
    "Streamlining recruitment for talent acquisition specialists";
  const heading = "Quickly find great talent  with";
  const specialHeading = "Sourcebae";

  const data = [
    {
      icon: Images.right,
      heading: "Applicants Pass Our Assessments",
      percent: "15%",
    },
    {
      icon: Images.booster,
      heading: "Boost Your Odds of Hiring the Perfect Match by 3 Times",
      percent: "5%",
    },
    {
      icon: Images.timer,
      heading: "Slash Your Hiring Time by Up to",
      percent: "91%",
    },
    {
      icon: Images.guessWork,
      heading: "Minimize Unnecessary Guesswork in Your Recruitment Process",
      percent: "78%",
    },
  ];
  return (
    <div className={styles.bg_image}>
    <Container otherStyles={'my-10 w-full'}>
      <div className={styles.parant}>
        <div className={styles.left_part}>
          <div className="sub_heading">{subheading}</div>
          <div className={styles.main_heading}>
            {heading} <span className="gradiant_color">{specialHeading}</span>
          </div>
          <div
            className={`${styles.chip_wrapper}  `}
          >
            {data?.map((item, index) => {
              return (
                <div className={`w-full flex ${index%2!=0 && 'justify-end'} lg:pr-12`}>
                <div
                  className={`${styles.chip_border} `}
                  key={index.toString()}
                >
                  <div className={styles.chip}>
                    <Image
                      src={item?.icon}
                      alt="icon"
                      className={styles.chip_icon}
                      width={42}
                      height={42}
                    />
                    <p className={styles.chip_heading}>{item?.heading}</p>
                    <p className={`gradiant_color ${styles.chip_percent}`}>
                      {item?.percent}
                    </p>
                  </div>
                </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.right_part}>
          <FindGreatForm/>
        </div>
      </div>
    </Container>
    </div>
  );
}
