"use server";
import { revalidatePath } from "next/cache";
import { create , destroy} from "../(dataMapper)/todoDataMapper";

export async function actionCreate(text: string) {
  console.log(text);
  await create(text);

  revalidatePath("/");
}


export async function actionDestroy(id: number) {
  console.log(id);
  await destroy(id);

  revalidatePath("/");
}

