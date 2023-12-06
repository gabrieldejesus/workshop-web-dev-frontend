"use client";

import { useForm } from "react-hook-form";
import styles from "./styles.module.css";

export default function Form() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = async (values: any) => {
    try {
      const response = await fetch("http://localhost:3030/summarizations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: "Teste",
          startAt: 60,
          endAt: 120,
          link: values?.link,
        }),
      });

      if (!response.ok) {
        throw new Error("Error please try again.");
      }

      const data = await response.json();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <input
        type="text"
        {...register("link", {
          required: true,
          pattern: {
            value: /https:\/\/www\.youtube\.com\/watch\?v=[a-zA-Z0-9_-]{11}/,
            message: "Link inválido",
          },
        })}
        name="link"
        className={styles.input}
        placeholder="Link do YouTube..."
      />

      <button type="submit" className={styles.button}>
        Gerar
      </button>

      {errors.link && (
        <span className={styles.error}>This field is required</span>
      )}
    </form>
  );
}
