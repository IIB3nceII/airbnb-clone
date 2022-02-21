import Image from "next/image";
import { FC } from "react";
import s from "./SmallCard.module.scss";

export interface ISmallCardProps {
  img: string;
  location: string;
  distance: string;
}

const SmallCard: FC<ISmallCardProps> = ({ img, location, distance }) => {
  return (
    <div className={s.smallCard}>
      <div className={s.smallCard_imgContainer}>
        <Image
          className={s.smallCard_imgContainer_image}
          src={img}
          alt="card img"
          layout="fill"
        />
      </div>

      <div className={s.smallCard_textContainer}>
        <h2>{location}</h2>
        <h3>{distance}</h3>
      </div>
    </div>
  );
};

export default SmallCard;
