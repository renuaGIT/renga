import WorksItem from "./WorksItem";
import WorksItemsEmpty from "./WorksItemsEmpty";


const Works = ({ list }) => {

  if (!list || list.length === 0) {
    return <WorksItemsEmpty />;
  }

  return (
    <div className="works-list">
      {list.map((item) => (
        <WorksItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Works;
