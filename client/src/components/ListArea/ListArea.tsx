import { useNavigate } from "react-router-dom";
import { RecipeType } from "../../types";
import Card from "../Card/Card";
import style from "./ListArea.module.scss";

export default function ListArea({
  data,
  id,
  pagesQuantity,
  totalQuantity,
}: {
  data: RecipeType[];
  id: number;
  pagesQuantity: number;
  totalQuantity: number;
}) {
  const navigate = useNavigate();
  return (
    <div className={style.listArea}>
      <div className={style.head}>
        <div className={style.title}>Найденные рецепты {totalQuantity}</div>
      </div>
      <div className={style.cards}>
        {data.length ? (
          data.map((el, id) => <Card recipe={data[id]} key={id} />)
        ) : (
          <div className={style.warning}>
            По данному запросу рецептов не найдено
          </div>
        )}
      </div>
      <div className={style.pagination}>
        <button
          className={style.navigateButton}
          onClick={() => navigate(id <= 1 ? `/${pagesQuantity}` : `/${id - 1}`)}
        >{`<`}</button>
        {Array.from(Array(pagesQuantity).keys()).map((num) => (
          <button
            className={style.navigateButton}
            onClick={() => navigate(`/${num + 1}`)}
          >
            {num + 1}
          </button>
        ))}
        <button
          className={style.navigateButton}
          onClick={() => navigate(id >= pagesQuantity ? `/1` : `/${id + 1}`)}
        >{`>`}</button>
      </div>
    </div>
  );
}
