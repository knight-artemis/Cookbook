import Header from "../../components/Header/Header";
import style from "./ListPage.module.scss";
import FilterArea from "../../components/FilterArea/FilterArea";
import ListArea from "../../components/ListArea/ListArea";
import { RecipeType } from "../../types";

export default function ListPage({
  data,
  id,
  setCountry,
  setType,
  setСomplexity,
  pagesQuantity,
  allData,
}: {
  data: RecipeType[];
  id: number;
  setCountry: React.Dispatch<React.SetStateAction<string>>;
  setType: React.Dispatch<React.SetStateAction<string>>;
  setСomplexity: React.Dispatch<React.SetStateAction<string>>;
  pagesQuantity: number;
  allData: RecipeType[];
}) {
  return (
    <>
      <Header />
      <div className={style.pageContent}>
        <FilterArea
          setCountry={setCountry}
          setType={setType}
          setСomplexity={setСomplexity}
        />
        <ListArea
          data={data}
          id={id}
          pagesQuantity={pagesQuantity}
          totalQuantity={allData?.length}
        />
      </div>
    </>
  );
}
