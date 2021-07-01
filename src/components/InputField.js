import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import fetchPokemonData from "../api-routes/fetchPokemonData";
import Card from "./Card";

let sprite;
let shiny_sprite;
let default_sprite;
let artwork;
let back_shiny;
let back_default;

const InputField = () => (
  <div>
    <img src="https://fontmeme.com/temporary/4461620d8e92f378d904610e4fd7c3db.png" alt=""></img>
    <Formik
      initialValues={{ pokemon: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.pokemon) {
          errors.pokemon = "Pokemon name required.";
        }
        return errors;
      }}
      onSubmit={async (values) => {
        sprite = await fetchPokemonData(values.pokemon);
        console.log(sprite);
        shiny_sprite = sprite.front_shiny;
        back_shiny = sprite.back_shiny;
        default_sprite = sprite.front_default;
        back_default = sprite.back_default;
        // artwork = sprite.official_artwork;
        // console.log(artwork);
      }}
    >
      {({ isSubmitting }) => (
        <>
          <Form>
            <Field type="string" name="pokemon"></Field>
            <ErrorMessage name="pokemon" component="div" />
            <button type="submit">Search</button>
            <Card img={shiny_sprite}></Card>
            <Card img={back_shiny}></Card>
            <Card img={default_sprite}></Card>
            <Card img={back_default}></Card>
          </Form>
        </>
      )}
    </Formik>
  </div>
);

export default InputField;
