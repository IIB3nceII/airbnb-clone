import Image from "next/image";
import { FC } from "react";
import s from "./Hero.module.scss";

const Hero: FC = () => {
  return (
    <div className={s.hero}>
      <Image
        src="https://links.papareact.com/0fm"
        alt="hero img"
        layout="fill"
        objectFit="cover"
      />

      <div className={s.hero_content}>
        <p>Not sure where to go? Perfect.</p>

        <button className={s.hero_content_button}>I&rsquo;m flexible</button>
      </div>
    </div>
  );
};

export default Hero;
