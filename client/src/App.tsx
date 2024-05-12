import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.scss";
import ListPage from "./pages/ListPage/ListPage";
import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { fetchAllRecipes } from "./redux/recipe/recipeThunkActions";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import RecipePage from "./pages/RecipePage/RecipePage";

function App() {
  const dispatch = useAppDispatch();
  const [country, setCountry] = useState("");
  const [type, setType] = useState("");
  const [complexity, setСomplexity] = useState("");
  const navigate = useNavigate();

  useLayoutEffect(() => {
    dispatch(fetchAllRecipes());
  }, []);

  useEffect(() => {
    navigate("/1");
  }, []);

  const data = useAppSelector((store) => store.recipeSlice);

  const filteredData = useMemo(() => {
    let filteredData = [...data];

    if (country) {
      filteredData = filteredData.filter((el) => el.cuisine === country);
    }

    if (type) {
      filteredData = filteredData.filter((el) => el.mealType.includes(type));
    }

    if (complexity) {
      filteredData = filteredData.filter((el) => el.difficulty === complexity);
    }

    return filteredData;
  }, [data, country, type, complexity]);

  const pagesQuantity = Math.ceil(filteredData.length / 6) || 1;

  useEffect(() => {
    console.log(pagesQuantity, "Я количеств страниц в App");
  }, [filteredData]);

  return (
    <>
      <Routes>
        {Array.from(Array(pagesQuantity).keys()).map((page) => (
          <Route
            key={page}
            path={`${page + 1}`}
            element={
              <ListPage
                data={filteredData.slice(page * 6, page * 6 + 6)}
                id={page + 1}
                allData={filteredData}
                pagesQuantity={pagesQuantity}
                setCountry={setCountry}
                setType={setType}
                setСomplexity={setСomplexity}
              />
            }
          />
        ))}
        <Route path="/recipe/:id" element={<RecipePage data={data} />} />
      </Routes>
    </>
  );
}

export default App;
