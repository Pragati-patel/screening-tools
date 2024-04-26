import React from "react";
import styles from "./style.module.css";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import Container from "../Container";

export default function Header() {
  return (<>
    <Container otherStyles={`py-6`}>
      <Image src={logo} width={"220px"} height={'70px'} className={styles.header_logo} alt="logo"/>
    </Container>
    <div className={styles.divider}></div>
  </>
  );
}
