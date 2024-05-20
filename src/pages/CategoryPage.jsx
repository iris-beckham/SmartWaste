import SpecialWaste from "../components/SpecialWasteDropOff";
import Compost from "../components/Compost";
import SharpsCategory from "../components/SharpsCategory";
import Recycling from "../components/Recycling"

const CategoryPage = () => {
  return (
    <div>
      <SpecialWaste />
      <Compost />
      <SharpsCategory />
      <Recycling />
    </div>
  );
};

export default CategoryPage;
