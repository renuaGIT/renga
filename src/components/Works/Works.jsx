import WorksItem from "./WorksItem";

const Works = ({ list }) => {
  return (
    <div className="works-list">
      {list.map((item) => (
        <WorksItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Works;
