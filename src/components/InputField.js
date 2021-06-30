import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import fetchPokemonData from "../api-routes/fetchPokemonData";
import Card from "./Card";

let sprite;

const InputField = () => (
  <div>
    <h1>Pokemon search</h1>
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
      }}
    >
      {({ isSubmitting }) => (
        <>
          <Form>
            <Field type="string" name="pokemon"></Field>
            <ErrorMessage name="pokemon" component="div" />
            <button type="submit">Search</button>
            <Card sprite={sprite}></Card>
          </Form>
        </>
      )}
    </Formik>
  </div>
);

export default InputField;
