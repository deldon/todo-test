// dataMapper.ts
import dataBase from "../(bdd)/bd"; // Import par défaut
import { Todo } from "./types";

export async function getAllTodo(): Promise<Todo[]> {
  try {
    // Requête SELECT pour obtenir les todos
    const query = `SELECT * FROM todo`;
    const result = await dataBase.query<Todo>(query);
    return result.rows; // Renvoie les todos trouvés
  } catch (_) {
    throw new Error("Impossible de récupérer les Todo");
  }
}

export async function create(text: string): Promise<Todo> {
  try {
    const query = `INSERT INTO todo (text) VALUES ($1) RETURNING *`;
    const result = await dataBase.query<Todo>(query, [text]);
    return result.rows[0]; // Renvoie le todo créé
  } catch (err) {
    console.error(err);
    throw new Error("Impossible de créer le Todo");
  }
}

export async function destroy(id: number): Promise<Todo> {
  try {
    // Requête INSERT pour ajouter un étudiant
    const query = `DELETE FROM todo WHERE id = $1 RETURNING *`;
    const values = [id];

    const result = await dataBase.query<Todo>(query, values);
    return result.rows[0]; // Renvoie le todo créé
  } catch (_) {
    throw new Error("destroy error");
  }
}
