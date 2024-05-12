import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RecipeType } from "../../types";
import style from "./RecipePage.module.scss";

export default function RecipePage({ data }: { data: RecipeType[] }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const updId = parseInt(id ?? "1");
  const recipe = data[updId];

  return (
    <>
      <header className={style.header}>
        <div className={style.headerContent}>
          <div className={style.wrapper}>
            <div className={style.imgDiv}>
              <img
                className={style.arrow}
                src="/backArrow.svg"
                alt="Иконка стрелки"
                onClick={() => navigate(-1)}
              />
            </div>
            {recipe.name}
          </div>
          <div className={style.headingExtra}></div>
        </div>
      </header>
      <div className={style.recipeDiv}>
        <div className={style.infoBlock}>
          <div className={style.cuisine}>
            <div className={style.head}>Cuisine</div>
            <div className={style.cuisineBody}>{recipe.cuisine}</div>
          </div>
          <div className={style.tags}>
            <div className={style.head}>Tags</div>
            <div className={style.tagsBody}>{recipe.tags.join(", ")}</div>
          </div>
          <div className={style.calories}>
            <div className={style.head}>Energy value</div>
            <div className={style.caloriesBody}>
              <div className={style.caloriesMainText}>
                {recipe.caloriesPerServing} kcal / 100 g
              </div>
            </div>
          </div>
          <div className={style.portions}>
            <div className={style.head}>Number of servings</div>
            <div className={style.portionsBody}>{recipe.servings}</div>
          </div>
          <div className={style.description}>
            <div className={style.head}>Description</div>
            <div className={style.descriptionBody}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates recusandae deserunt repellat aspernatur ut aliquid,
              ullam quae? Labore ratione cum architecto temporibus. Ducimus
              culpa cumque explicabo necessitatibus, corrupti error officia.
            </div>
          </div>
        </div>
        <div className={style.infoBlock}>
          <div className={style.cuisine}>
            <div className={style.head}>Cuisine</div>
            <div className={style.cuisineBody}>{recipe.cuisine}</div>
          </div>
          <div className={style.instruction}>
            <div className={style.head}>Cooking instructions</div>
            <div className={style.steps}>
              {recipe.instructions.map((step) => (
                <div className={style.step}>
                  <div className={style.forIcon}>
                    <img src="/circle.svg" alt="Иконка круга" />
                  </div>
                  <div>{step}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={style.imageBlock}>
          <img src={recipe.image} alt="Изображение блюда" />
        </div>
        <div></div>
      </div>
    </>
  );
}
