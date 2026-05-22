import Image from "next/image";
import './HomePartners.css'

const partners = [
  "huawei", "optimism", "ford", "abbott", "binance",
  "papara", "vodafone", "eclipse", "polkadot", "amc"
];

const HomePartners = () => {
  const duplicatedPartners = [...partners, ...partners];

  return (
    <div className="partners-marquee">
      <div className="marquee-track">
        {duplicatedPartners.map((src, idx) => (
          <div className="marquee-item" key={idx}>
            <Image
              src={`/img/home/partners/${src}.svg`}
              width={140}
              height={60}
              alt=""
              priority={idx < 5}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePartners;
