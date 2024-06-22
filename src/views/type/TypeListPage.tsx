import { Title, TypeList } from "@/components/common";
import { cuisinesData, dishTypeData, mealTypeData } from "@/data";
import { food_bg_two } from "@/utils/images";
import { useParams } from "react-router-dom";

const TypeListPage = () => {
  const { typeId } = useParams();
  let typeList = null;

  if (typeId == "meal") {
    typeList = mealTypeData;
  } else if (typeId == "dish") {
    typeList = dishTypeData;
  } else {
    typeList = cuisinesData;
  }

  return (
    <main
      className="type-list-page pt-16"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${food_bg_two}') center/cover no-repeat fixed`,
      }}
    >
      <div className="container">
        <Title
          subTitle="Get Meal Ready"
          mainTitle={`Recipe ${typeId}`}
          shadow={true}
        />
        <TypeList typeId={typeId} typeList={typeList} />
      </div>
    </main>
  );
};

export default TypeListPage;
