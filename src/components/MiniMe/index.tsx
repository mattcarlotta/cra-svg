import React from "react";
import cx from "classnames";
import { ReactComponent as Phone } from "../../images/phone.svg";
import { ReactComponent as AtDesk } from "../../images/at-desk.svg";
import { ReactComponent as Available } from "../../images/available.svg";
import { ReactComponent as Skills } from "../../images/skills.svg";
import { ReactComponent as Smile } from "../../images/smile.svg";
import { ReactComponent as Beach } from "../../images/beach.svg";
import styles from "./styles.module.scss";

const selectMiniMe = (name?: string): JSX.Element => {
  switch (name) {
    case "available":
      return <Available />;
    case "at-desk":
      return <AtDesk />;
    case "skills":
      return <Skills />;
    case "phone":
      return <Phone />;
    case "beach":
      return <Beach />;
    default:
      return <Smile />;
  }
};

type Props = {
  name?: string;
  width: string;
  classes?: string[] | string;
};

export const MiniMe: React.FC<Props> = ({ name, width, classes }) => (
  <div className={cx(styles["mini-me"], styles[`w-${width}`], classes)}>
    {selectMiniMe(name)}
  </div>
);

export default MiniMe;
