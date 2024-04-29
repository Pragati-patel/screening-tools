import React from "react";
import styles from "./style.module.css";
import Container from "@/components/common/Container";
import Image from "next/image";
import { Images } from "@/assets/Images";

export default function Difference() {
  const subheading = "Your smart shortcut to screening";
  const heading = "How Sourcebae makes a ";
  const specialHeading = "difference";

  const content = [
    {
      btn: "Pros of Upscreening",
      data: [
        "Automated screening process",
        "Unbiased and reliable ranking",
        "Hire 10 times faster",
        "Transaparent evaluation",
      ],
    },
    {
      btn: "Upscreen",
      data: ["", "", "", ""],
    },
    {
      btn: "Manual Screening",
      data: [
        "Repetitive resume reviewing",
        "Unconscious bias",
        "Slow hiring process",
        "Inconsistency in scoring",
      ],
    },
  ];

  return (
    <Container otherStyles={"my-[100px]"}>
      <div className={styles.parant}>
        <div>
          <p className="sub_heading">{subheading}</p>
          <h3 className="heading">
            {heading}
            <span className="gradiant_color">{specialHeading}</span>
          </h3>
          <Image src={Images.differeceImg} alt="difference-img" />
        </div>
      </div>

      <div className={styles.box_wrapper}>
        {content?.map((item, index) => {
          return (
            <div key={index.toString()}>
              <button className={styles.content_btn}>
                <div>{item?.btn}</div>
              </button>
              <div className={`${styles.data_wrapper}`}>
                {item?.data?.map((ele, ind) => {
                  return (
                    <div key={ind.toString()}>
                      <p className={`${styles.element}`}>
                        {index === 1 && (
                          <Image src={Images.rightCheck} alt="right-check" />
                        )}
                        {index === 2 && (
                          <Image src={Images.cross} alt="cross" />
                        )}
                        {ele}
                      </p>
                      <div
                        className={`${styles.line} ${
                          ind === item?.data?.length - 1 && "!hidden"
                        } ${index === 4 && "!border-fff"}`}
                      ></div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
