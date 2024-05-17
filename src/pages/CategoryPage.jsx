import React from "react";
import CategoryTemplate from "../components/CategoryTemplate";
import Compost from "../components/Compost";

const CategoryPage = () => {
  return (
    <div>
      <div className="text-3xl text-green-400 bg-green-900 py-14">
        Here Will be Categories
      </div>
      {/* <CategoryTemplate /> */}
      <Compost />
    </div>
  );
};

export default CategoryPage;
