import React from "react";
import styles from "./style.module.css";
import Container from "@/components/common/Container";
import Image from "next/image";
import { Images } from "@/assets/Images";

export default function HiringExperience() {
  const subheading = "Your smart shortcut to screening";
  const heading = "Features that enhance your";
  const specialHeading = "  hiring experience";

  const content = [
    {
      col: [
        {
          icon: Images.unbaiseFeedback,
          heading: "Unbiased feedback",
        },
        {
          icon: Images.whiteLabelling,
          heading: "White Labelling",
        },
      ],
    },
    {
      col: [
        {
          icon: Images.reviewRecordings,
          heading: "Review Recordings",
        },
      ],
    },
    {
      col: [
        {
          icon: Images.bulkInvites,
          heading: "Bulk Invites",
        },
        {
          icon: Images.customerQues,
          heading: "Custom Questions",
        },
      ],
    },
  ];

  return (
    <Container>
      <div className={styles.parant}>
        <div className="flex flex-col items-center">
          <p className="sub_heading">{subheading}</p>
          <h3 className="heading">
            {heading}
            <span className="gradiant_color">{specialHeading}</span>
          </h3>
        </div>
      </div>

      <div className={styles.box_wrapper}>
        {content?.map((item, index) => {
          return (
            <div className={styles.col_wrapper}>
              {item?.col?.map((ele, ind) => {
                return (
                  <div key={index.toString()} className={styles.box}>
                    <Image src={ele.icon} alt={ele?.heading} className={styles.box_icon}/>
                    <p>alt={ele?.heading}</p>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </Container>
  );
}
