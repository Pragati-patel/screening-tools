import Container from "@/components/common/Container";
import React from "react";
import styles from "./style.module.css";
import Image from "next/image";
import { Images } from "@/assets/Images";

export default function SmartScreening() {
  const heading = "Switch to Smart Screening with";
  const specialHeading = " Sourcebae";

  const chipData = [
    {
      icon: Images.smartScrrenIcon1,
      heading: "Sign up and upload your Job Description",
      desc: "We meet with you to learn about your business, your goals, and your target audience.",
    },
    {
      icon: Images.smartScrrenIcon2,
      heading: "AI algorithm creates tailored assessments",
      desc: "We develop a customized marketing strategy that is based on your unique needs and goals.",
    },
    {
      icon: Images.smartScrrenIcon3,
      heading: "Invite candidates for assessment with a personal link",
      desc: "We execute our strategy using the latest digital marketing tools and techniques.",
    },
    {
      icon: Images.smartScrrenIcon3,
      heading: "Find AI-screened reports on the dashboard",
      desc: "We track the results of our campaigns so that we can make adjustments as needed.",
    },
    {
      icon: Images.smartScrrenIcon4,
      heading: "Check ranks, reports, and scores",
      desc: "We track the results of our campaigns so that we can make adjustments as needed.",
    },
  ];

  return (
    <Container>
      <div className={styles.parant}>
        <div className={styles.left_part}>
          <div className={styles.chip_wrapper}>
            {chipData?.map((item, index) => {
              return (
                <div className={styles.chip} key={index.toString()}>
                  <Image
                    src={item.icon}
                    className={styles.chip_icon}
                    alt={index + "icon"}
                  />
                  <div className={styles.chip_des}>
                    <p className={` description ${styles.chip_heading}`}>{item.heading}</p>
                    <p className={styles.chip_detail}>{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.right_part}>
          <h3 className={"heading w-full  !mt-0"}>
            {heading}
            <span className="gradiant_color"> {specialHeading}</span>
          </h3>
          <Image
            src={Images.smartScreenImg}
            alt="smart-screening"
            className={styles.smart_screen_img}
          />
        </div>
      </div>
    </Container>
  );
}
