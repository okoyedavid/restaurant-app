import { supabase } from "./supabase";

export async function getMenu() {
  let { data, error } = await supabase
    .from("restaurant")
    .select("*")
    .order("id", { ascending: true });
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

export async function editMenu(item, column = "addedToCart") {
  const { id, value } = item;

  const update = { [column]: value };

  console.log(update);

  const { error } = await supabase
    .from("restaurant")
    .update(update)
    .eq("id", id)
    .select();

  if (error) throw new Error("something went wrong");
}
