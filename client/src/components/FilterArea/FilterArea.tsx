import { useNavigate } from "react-router-dom";
import style from "./FilterArea.module.scss";
import { useAppSelector } from "../../redux/hooks";
import { SetStateAction } from "react";

export default function FilterArea({
  setCountry,
  setType,
  setСomplexity,
}: {
  setCountry: React.Dispatch<React.SetStateAction<string>>;
  setType: React.Dispatch<React.SetStateAction<string>>;
  setСomplexity: React.Dispatch<React.SetStateAction<string>>;
}) {
  const navigate = useNavigate();
  const data = useAppSelector((store) => store.recipeSlice);

  const handleCountryChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setCountry(e.target.value);
  };

  const handleTypeChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setType(e.target.value);
  };

  const handleComplexityChange = (e: {
    target: { id: SetStateAction<string> };
  }) => {
    setСomplexity(e.target.id);
  };

  const resetFilters = () => {
    setCountry("");
    setType("");
    setСomplexity("");
  };

  return (
    <div className={style.filterAria}>
      <div className={style.header}>
        <img
          src="https://www.design-italia.it/wp-content/uploads/2018/01/cucina-a-vista-hotel-324x160.jpg"
          alt="Изображение кухни ресторана"
        />
        <div className={style.text}>
          В нашей жизни, когда время становится все более ценным ресурсом,
          задача планирования приема пищи становится все более сложной. <br />{" "}
          <br /> Часто мы сталкиваемся с дилеммой: что приготовить на завтрак,
          обед или ужин? Каким образом мы можем легко и быстро определиться с
          выбором блюда и не тратить много времени на принятие этого решения?{" "}
          <br /> <br />
          Наш сервис поможет: выбирайте параметры - и вперед!
        </div>
      </div>
      <div className={style.input}>
        <div className={style.select}>
          <label htmlFor="cuisine-select">Сuisine:</label>
          <select
            name="cuisine"
            id="cuisine-select"
            onChange={handleCountryChange}
          >
            <option value="">All countries and regions</option>
            <option value="Italian">Italian</option>
            <option value="Asian">Asian</option>
            <option value="American">American</option>
            <option value="Mexican">Mexican</option>
            <option value="Mediterranean">Mediterranean</option>
            <option value="Pakistani">Pakistani</option>
            <option value="Japanese">Japanese</option>
            <option value="Moroccan">Moroccan</option>
            <option value="Korean">Korean</option>
            <option value="Greek">Greek</option>
            <option value="Thai">Thai</option>
            <option value="Indian">Indian</option>
            <option value="Turkish">Turkish</option>
            <option value="Smoothie">Smoothie</option>
            <option value="Russian">Russian</option>
            <option value="Lebanese">Lebanese</option>
            <option value="Brazilian">Brazilian</option>
          </select>
        </div>
        <div className={style.select}>
          <label htmlFor="type-select">Dish type:</label>
          <select name="type" id="type-select" onChange={handleTypeChange}>
            <option value="">All types</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Snack">Snack</option>
            <option value="Dessert">Dessert</option>
            <option value="Side Dish">Side Dish</option>
            <option value="Appetizer">Appetizer</option>
            <option value="Beverage">Beverage</option>
          </select>
        </div>
        <div className={style.select}>
          <div>Cooking complexity</div>
          <input
            type="radio"
            name="complexity"
            id=""
            onChange={handleComplexityChange}
          />
          <label htmlFor="any">Any</label>
          <input
            // className={style.radioButton}
            type="radio"
            name="complexity"
            id="Easy"
            onChange={handleComplexityChange}
          />
          <label htmlFor="easy">Easy</label>
          <input
            // className={style.radioButton}
            type="radio"
            name="complexity"
            id="Medium"
            onChange={handleComplexityChange}
          />
          <label htmlFor="medium">Medium</label>
          <input
            // className={style.radioButton}
            type="radio"
            name="complexity"
            id="Hard"
            disabled
            onChange={handleComplexityChange}
          />
          <label htmlFor="hard">Hard</label>
        </div>
        <button className={style.resetButton} onClick={resetFilters}>
          Reset all filters
        </button>
      </div>
      <div className={style.additional}>
        <div className={style.addText}>And you can also taste good luck</div>
        <button
          className={style.luckyButton}
          onClick={() =>
            navigate(`/recipe/${Math.floor(Math.random() * data.length + 1)}}`)
          }
        >
          I'll be lucky!
        </button>
      </div>
    </div>
  );
}
