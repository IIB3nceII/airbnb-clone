import Image from "next/image";
import { FC } from "react";
import s from "./LargeCard.module.scss";

interface ISmallCardProps {
  img: string;
  title: string;
  description: string;
  buttonText: string;
}

const LargeCard: FC<ISmallCardProps> = ({
  img,
  title,
  description,
  buttonText,
}) => {
  return (
    <section className={s.largeCard}>
      <div className={s.largeCard_imageContainer}>
        <Image
          className={s.largeCard_imageContainer_image}
          src={img}
          alt="card img"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className={s.largeCard_contentContainer}>
        <h3>{title}</h3>
        <p>{description}</p>

        <button>{buttonText}</button>
      </div>
    </section>
  );
};

export default LargeCard;
