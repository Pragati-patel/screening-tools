import React from "react";
import styles from "./style.module.css";
import Container from "@/components/common/Container";
import Image from "next/image";
import { Images } from "@/assets/Images";

export default function Difference() {
  const subheading = "Your smart shortcut to screening";
  const heading = "How Sourcebae makes a ";
  const specialHeading = "difference";

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
    </Container>
  );
}
