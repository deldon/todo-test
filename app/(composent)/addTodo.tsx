"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { actionCreate } from "../(action)/actions";

type FormValues = {
  text: string;
};

export default function MyForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    try {
      actionCreate(data.text);
      reset();
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-1">
      {/* Input */}
      <input
        className="w-full px-4 py-2 rounded-lg border border-gray-300"
        {...register("text", { required: "Ce champ est obligatoire" })}
        placeholder="Écris quelque chose..."
      />
      {/* Affichage des erreurs */}
      <div>{errors.text && <span>{errors.text.message}</span>}</div>

      <button
        className="w-full px-4 py-2 rounded-lg border border-gray-300"
        type="submit"
      >
        Envoyer
      </button>
    </form>
  );
}
