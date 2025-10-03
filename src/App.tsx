import { useEffect, useState } from 'react';
import Header from './Header';
import RecipeCard from './RecipeCard';
import type { MultipleRecipes, SinglePreview } from './types';

const dummyProps: SinglePreview = {
  name: "",
  difficulty: "",
  tags: [],
  image: ""
};

const App = () => {
  const [page, setPage] = useState(1);
  const [props, setProps] = useState(dummyProps);

  useEffect(() => {
    fetch(`https://dummyjson.com/recipes?limit=12&select=name,difficulty,tags,image`)
      .then((res) => res.json())
      .then((data: MultipleRecipes) => {
        console.info(data);
        setProps(data.recipes[0]);
      })
      .catch((error) => {
        console.error('Unexpected Error: ', error);
      }) 
  }, []);

  return (
    <div className="app">
      <Header />
      <RecipeCard {...props} />
    </div>
  );
};

export default App;
