import styles from './style.module.css'
import BorderedTitle from "../BorderedTitle/BorderedTitle";
import CommonLink from "../CommonLink";

const collaborationsList = [
  {
    categoryName: "Fintech",
    categorySlug: "/work",
    items: [
      {
        name: "Freedom Finance KZ",
        descr: "Brand identity and product design for \n a financial platform.",
      },
      {
        name: "Papara",
        descr:
          "Product design concept for a digital \n payment platform in Turkey.",
      },
      {
        name: "Coinpayments",
        descr: "Product design for a digital asset \n exchange platform.",
      },
    ],
  },
  {
    categoryName: "AI Products",
    categorySlug: "/work",
    items: [
      {
        name: "Ape Ai",
        descr: "Product design for an AI-driven \n workflow platform.",
      },
      {
        name: "Velas",
        descr:
          "Brand campaign and digital \n experience design for a global \n telecommunications company.",
      },
      {
        name: "Nobleblocks",
        descr:
          "Brand identity and product design for \n a blockchain-based publishing \n platform.",
      },
    ],
  },
  {
    categoryName: "Blockchain",
    categorySlug: "/work",
    items: [
      {
        name: "Eclipse.xyz",
        descr: "Mascot design, brand identity and \n motion system.",
      },
      {
        name: "Polkadot",
        descr: "Branding and visual system for a \n Web3 ecosystem.",
      },
      {
        name: "Layer3.xyz",
        descr:
          "Illustration system and motion design \n for a digital platform.",
      },
      {
        name: "Optimism",
        descr: "Campaign and visual system design \n for a Web3 ecosystem.",
      },
      {
        name: "Yield.xyz",
        descr:
          "Motion and 3D design  for a series of \n films for a Web3 platform.",
      },

      {
        name: "Binance",
        descr: "Design support across internal \n products and visual systems.",
      },
      {
        name: "Looksrare",
        descr: "Product design for a digital asset \n marketplace.",
      },
      {
        name: "Twotwentyk",
        descr: "Product design and branding for an \n NFT trading platform.",
      },
      {
        name: "Pancakeswap",
        descr: "Illustration system for a digital wallet.",
      },

      {
        name: "NVO",
        descr:
          "Brand identity, product design and \n motion system for a digital wallet.",
      },
      {
        name: "SmartCredit",
        descr: "Brand identity and platform design for \n a credit product.",
      },
    ],
  },
  {
    categoryName: "Global Brands",
    categorySlug: "/work",
    items: [
      {
        name: "Ford",
        descr: "UI design for in-vehicle systems and \n dashboard interfaces.",
      },
      {
        name: "AMC+",
        descr: "Product design for a streaming \n platform.",
      },
      {
        name: "Vodafone",
        descr:
          "Brand campaign and digital \n experience for a global \n telecommunications company.",
      },
      {
        name: "Huawei",
        descr:
          "Design support across internal \n platforms and digital interfaces.",
      },

      {
        name: "Abbott",
        descr: "Brand and digital experience for \n healthcare products.",
      },

      {
        name: "Voila",
        descr:
          "Motion concept and direction across \n a series of digital campaigns.",
      },
      {
        name: "Fantasy",
        descr: "Motion and 3D design across digital \n products.",
      },
    ],
  },
];

const Collaborations = () => {
  return (
    <section>
      <BorderedTitle>
        Selected collaborations across AI, <br /> fintech, SaaS and emerging
        technologies.
      </BorderedTitle>
      {collaborationsList.map((collabItem) => {
        const { categoryName, categorySlug, items } = collabItem;
        return (
          <section className={styles.collabList} key={categoryName}>
            <h3 className={styles.collabListTitle}>{categoryName}</h3>
            <ul className={styles.collabListItems}>
              {items.map((el, index) => (
                <li className={styles.collabListItem} key={index}>
                  <b>{el.name}</b>
                  <p>{el.descr}</p>
                </li>
              ))}
            </ul>
            <CommonLink url={categorySlug}>Explore {categoryName} ↗</CommonLink>
          </section>
        );
      })}
    </section>
  );
};

export default Collaborations;
