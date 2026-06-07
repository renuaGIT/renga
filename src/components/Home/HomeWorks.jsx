import Image from "next/image";
import BorderedTitle from "../BorderedTitle/BorderedTitle";
import Link from "next/link";
import HomeWorksItem from "./HomeWorksItem";
import CommonLink from "../CommonLink";

const HomeWorks = () => {
  return (
    <section className="works">
      <BorderedTitle>Selected work</BorderedTitle>

      <div className="works__list">
        <HomeWorksItem
          href=''
          src='/img/home/works/ApeAi.webm'
          poster='/img/works/ApeAi.webp'
          name='ApeAI'
          descr='AI-powered workflow and achievement tools for modern teams.'
        />
        <HomeWorksItem
          href='freedom-finance'
          src='/img/home/works/Freedomfinance.webm'
          poster='/img/home/works/Freedomfinance-poster.jpg'
          name='Freedom Finance'
          descr='A visually compelling card identity and ecosystem.'
        />
        <HomeWorksItem
          href='vodafone'
          src=''
          poster='/img/home/works/vodafone.webp'
          name='Vodafone'
          descr='Creative campaign and digital experience.'
          additionalClass="works__list-item--big"
        />
        <HomeWorksItem
          href='cruz'
          src='/img/home/works/Cruz.webm'
          poster='/img/home/works/cruz.jpg'
          name='Cruz'
          descr='Reimagining digital banking.'
          additionalClass="works__list-item--60"
        />
        <HomeWorksItem
          href='nvo'
          src=''
          poster='/img/home/works/NVO.webp'
          name='NVO'
          descr='Brand identity and digital experiences.'
          additionalClass=""
        />
        <HomeWorksItem
          href='freedom-finance_card-series'
          src=''
          poster='/img/home/works/freedom-card-poster.webp'
          name='Freedom Finance - Card series'
          descr='Designing a premium card series for modern financial products.'
        />
        <HomeWorksItem
          href='looksrare'
          src='/img/home/works/Looksrare.webm'
          poster='/img/home/works/Looksrare.jpg'
          name='Looksrare'
          descr='Marketplace design for digital assets.'
        />
        <HomeWorksItem
          href='nobleblocks'
          src='/img/home/works/Nobleblocks.webm'
          poster='/img/home/works/Nobleblocks.jpg'
          name='Nobleblocks'
          descr='Blockchain-based publishing platform.'
          additionalClass="works__list-item--big"
        />
      </div>
      <CommonLink url='/work'>
        See more works ↗
      </CommonLink>
    </section>
  );
};

export default HomeWorks;
