import Image from "next/image";
import { FC } from "react";
import s from "./MediumCard.module.scss";

export interface IMediumCardProps {
  img: string;
  title: string;
}

const MediumCard: FC<IMediumCardProps> = ({ img, title }) => {
  return (
    <div className={s.mediumCard}>
      <div className={s.mediumCard_imageContainer}>
        <Image className={s.mediumCard_imageContainer_image} src={img} alt="card img" layout="fill" />
      </div>

      <h3>{title}</h3>
    </div>
  );
};

export default MediumCard;
