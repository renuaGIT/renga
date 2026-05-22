"use client";
import Link from "next/link";
import FollowCursor from "../FollowCursor";
import LazyVideo from "../LazyVideo";

const HomeWorksItem = ({
  href,
  src,
  poster,
  name,
  descr,
  additionalClass = "",
}) => {
  return (
    <Link
      href={href === "" ? "#" : `/work/${href}`}
      scroll={true}
      className={`works__list-item ${additionalClass}`}
      onClick={(e) => href === "" && e.preventDefault()}
    >
      <LazyVideo src={src === "" ? null : src} poster={poster} />
      <b>{name}</b>
      <p>{descr}</p>
      {href === "" && <FollowCursor>Soon</FollowCursor>}
    </Link>
  );
};

export default HomeWorksItem;
