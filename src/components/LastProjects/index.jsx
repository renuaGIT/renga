"use client"
import styles from "./style.module.css";
import Link from "next/link";
import BorderedTitle from "../BorderedTitle/BorderedTitle";
import FollowCursor from "../FollowCursor";

const variants = [
  {
    title: "Freedom Finance Bank",
    descr:
      "Bank card design exploring modern fintech identity and digital aesthetics.",
    bgColor: "#8CE85F",
    textColor: "#0D0D0D",
    posterUrl: "/img/last-projects/freedom-finance-poster.jpg",
    videoUrl: "",
    link: '/work/freedom-finance',
  },
  {
    title: "Vodafone",
    descr:
      "Expressive illustration and motion campaign for a global telecom brand.",
    bgColor: "#F23111",
    textColor: "#ffffff",
    posterUrl: "/img/last-projects/vodafone-poster.jpg",
    videoUrl: "",
    link: '/work/vodafone',
  },
  {
    title: "NVO",
    descr:
      "Trading experience combining motion systems, product design and fintech branding.",
    bgColor: "#2E4BB6",
    textColor: "#FFFFFF",
    posterUrl: "/img/last-projects/nvo-poster.jpg",
    videoUrl: "",
    link: '/work/nvo',
  },
  {
    title: "Cruz",
    descr:
      "Digital banking product combining motion, identity and product systems.",
    bgColor: "#E13ECC",
    textColor: "#ffffff",
    posterUrl: "/img/last-projects/cruz-poster.jpg",
    videoUrl: "",
    link: '/work/cruz',
  },
  {
    title: "Freedom Finance - Cards Series",
    descr:
      "A cinematic fintech card experience built through 3D visuals and product identity.",
    bgColor: "#34965F",
    textColor: "#ffffff",
    posterUrl: "/img/last-projects/freedom-finance-cards-poster.jpg",
    videoUrl: "",
    link: '/work/freedom-finance_card-series',
  },
  {
    title: "Looksrare",
    descr:
      "Web3 marketplace product blending motion, identity and community-driven design.",
    bgColor: "#97F574",
    textColor: "#0D0D0D",
    posterUrl: "/img/last-projects/looksrare-poster.jpg",
    videoUrl: "/img/last-projects/",
    link: '/work/looksrare',
  },
  {
    title: "Nobleblocks",
    descr:
      "A Web3 publishing ecosystem designed for modern scientific collaboration.",
    bgColor: "#BB87E0",
    textColor: "#0D0D0D",
    posterUrl: "/img/last-projects/nobleblocks-poster.jpg",
    videoUrl: "",
    link: '/work/nobleblocks',
  },
  {
    title: "ApeAi",
    descr:
      "Digital product system built around AI-assisted workflows and team productivity.",
    bgColor: "#232323",
    textColor: "#ffffff",
    posterUrl: "/img/last-projects/ApeAi-poster.jpg",
    videoUrl: "",
    link: '',
  },
];

const findVariantByTitle = (title) => {
  return variants.find((v) => v.title.toLowerCase() === title.toLowerCase());
};

const LastProjects = ({
  smallItemTitle = "ApeAi",
  bigItemTitle = "Vodafone",
  isReversed = false,
}) => {
  const smallVariant = findVariantByTitle(smallItemTitle);
  const bigVariant = findVariantByTitle(bigItemTitle);

  const smallData = smallVariant || variants[0];
  const bigData = bigVariant || variants[1];

  const navClassName = `${styles.lastProjects__list} ${isReversed ? styles["lastProjects__list--reversed"] : ""}`;

  return (
    <section className={styles.lastProjects}>
      <BorderedTitle>Last Project</BorderedTitle>
      <nav className={navClassName}>
        <Link
          href={smallData.link !== '' ? smallData.link : '#'}
          className={
            styles.lastProjects__item +
            " " +
            styles["lastProjects__item--small"]
          }
          onClick={(e) => smallData.link === '' && e.preventDefault()}
        >
          <div
            className={styles.lastProjects__itemInfo}
            style={{ "--bg-color": smallData.bgColor,  "--text-color": smallData.textColor}}
          >
            <b>{smallData.title}</b>
            <span>{smallData.descr}</span>
          </div>
          <video
            src={smallData.videoUrl === "" ? null : smallData.videoUrl}
            poster={smallData.posterUrl}
            autoPlay
            playsInline
            muted
            loop
          />
          {
            smallData.link === '' && <FollowCursor>Soon</FollowCursor>
          }
        </Link>
        <Link
          href={bigData.link !== '' ? bigData.link : '#'}
          className={
            styles.lastProjects__item + " " + styles["lastProjects__item--big"]
          }
          onClick={(e) => bigData.link === '' && e.preventDefault()}
        >
          <div
            className={styles.lastProjects__itemInfo}
            style={{ "--bg-color": bigData.bgColor,  "--text-color": bigData.textColor}}
          >
            <b>{bigData.title}</b>
            <span>{bigData.descr}</span>
          </div>
          <video
            src={smallData.videoUrl === "" ? null : smallData.videoUrl}
            poster={bigData.posterUrl}
            autoPlay
            playsInline
            muted
            loop
          />
          {
            bigData.link === '' && <FollowCursor>Soon</FollowCursor>
          }
        </Link>
      </nav>
      <Link href="/work" className={styles.lastProjects__more}>
        See more works
      </Link>
    </section>
  );
};

export default LastProjects;
