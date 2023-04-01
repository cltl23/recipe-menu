import React from "react";
import recipe1 from "../assets/recipe-1.jpeg";
import recipe2 from "../assets/recipe-2.jpeg";
import recipe3 from "../assets/recipe-3.jpeg";
import recipe4 from "../assets/recipe-4.jpeg";
import Container from "../components/container/Container";
import Header from "../components/header/Header";
import Search from "../components/search section/Search";
import Hero from "../components/hero/Hero";
import Recipes from "../components/recipes/Recipes";
import Recipe from "../components/recipe/Recipe";
import Footer from "../components/footer/Footer";
import Main from "../components/main/Main";

export default function Home() {
  const menusArray = [
    {
      recipe: 1,
      image: [recipe1],
      title: "Tomato, Avocado Salsa",
      kitchen: "Dona's Kitchen",
    },
    {
      recipe: 2,
      image: [recipe2],
      title: "Chickpea & Butternut Salad",
      kitchen: "Tasty Treat",
    },
    {
      recipe: 3,
      image: [recipe3],
      title: "Spicy Chicken Salad",
      kitchen: "Yummy Foods",
    },
    {
      recipe: 4,
      image: [recipe4],
      title: "Chips, Avocado Creamy Sauce",
      kitchen: "Ella Olsson",
    },
  ];

  return (
    <body>
      <Container>
        <Header />
        <Main>
          <Search />
          <Hero />
          <Recipes>
            <Recipe menus={menusArray} />
          </Recipes>
        </Main>
        <Footer />
      </Container>
    </body>
  );
}
