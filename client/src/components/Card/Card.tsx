import { Link, useNavigate } from "react-router-dom";
import { RecipeType } from "../../types";
import style from "./Card.module.scss";

export default function Card({ recipe }: { recipe: RecipeType }) {
  const navigate = useNavigate();

  return (
    <div
      className={style.card}
      onClick={() => navigate(`/recipe/${recipe.id}}`)}
    >
      <div className={style.leftPart}>
        <div className={style.head}>{recipe?.name}</div>
        <img src={recipe?.image} alt="Изображене блюда" />
      </div>
      <div className={style.rightPart}>
        <div className={style.description}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
          facere iste, molestiae vitae et natus, repellendus debitis culpa
          impedit, a provident sequi dicta distinctio ad cupiditate. Molestiae
          dignissimos quibusdam architecto.
        </div>
        <div className={style.duration}>
          <img className={style.icon} src="/timer.svg" alt="Иконка часов" />
          <div className={style.durationTime}>
            {recipe?.cookTimeMinutes} min
          </div>
        </div>
        <div className={style.complexity}>
          <div className={style.complexityText}>Сomplexity:</div>
          <div className={style.stars}>
            {recipe?.difficulty === "Easy" ? (
              <span>
                <img src="/filledStar.svg" alt="Заполненная звезда" />
                <img src="/emptyStar.svg" alt="Полая звезда" />
                <img src="/emptyStar.svg" alt="Полая звезда" />
              </span>
            ) : recipe?.difficulty === "Medium" ? (
              <span>
                <img src="/filledStar.svg" alt="Заполненная звезда" />
                <img src="/filledStar.svg" alt="Заполненная звезда" />
                <img src="/emptyStar.svg" alt="Полая звезда" />
              </span>
            ) : (
              <span>
                <img src="/filledStar.svg" alt="Заполненная звезда" />
                <img src="/filledStar.svg" alt="Заполненная звезда" />
                <img src="/filledStar.svg" alt="Полая звезда" />
              </span>
            )}
          </div>
        </div>
        <div className={style.addText}>{recipe?.cuisine} cuisine</div>
        <div className={style.addText}>{recipe?.mealType.join(", ")}</div>
      </div>
    </div>
  );
}
