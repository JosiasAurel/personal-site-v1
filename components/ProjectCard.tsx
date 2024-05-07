import React, { FunctionComponent } from "react";
import Image from "next/image";
import styles from "../styles/projectcard.module.css";
import { Card } from "@geist-ui/react";

type ProjectProps = {
  name: String;
  link: string;
  photo: string;
};

const ProjectCard: FunctionComponent<ProjectProps> = ({
  name,
  link,
  photo,
}): JSX.Element => {
  return (
    <div className={styles.card}>
      <Card hoverable>
        {photo ? <Image src={photo} width="250px" height="250px" /> : ""}
        <a href={link ? link : "#"}>
          <h2 style={{ textAlign: "center" }}>{name}</h2>
        </a>
      </Card>
    </div>
  );
};

export default ProjectCard;
