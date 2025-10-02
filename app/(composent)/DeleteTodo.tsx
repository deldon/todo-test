"use client";
import { actionDestroy } from "../(action)/actions";

type Props = { id: number };

export default function TodoDelete({ id }: Props) {
  const handleDelete = async () => {
    await actionDestroy(id);
    console.log(id);
  };

  return (
    <button
      onClick={handleDelete}
      className="text-red-500 hover:text-red-700 font-bold"
    >
      Supprimer
    </button>
  );
}
