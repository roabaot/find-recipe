import { cuisinesData, dishTypeData, mealTypeData } from "@/data";
import React, { ChangeEvent } from "react";

interface SelectProps {
  typeData: {
    typeOf: string;
    typeName: string;
  };
  handelSelection: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const Select = ({ typeData, handelSelection }: SelectProps) => {
  let typeOfList = null;
  if (typeData.typeOf == "cuisine") {
    typeOfList = cuisinesData;
  } else if (typeData.typeOf == "dish") {
    typeOfList = dishTypeData;
  } else if (typeData.typeOf == "meal") {
    typeOfList = mealTypeData;
  }
  return (
    <div className="select">
      <select
        name="select type"
        defaultValue={typeData?.typeName}
        onChange={handelSelection}
      >
        {typeOfList?.map((typeItem) => (
          <option key={typeItem.type} value={typeItem.type}>
            {typeItem.type}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
