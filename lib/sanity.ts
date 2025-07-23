import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "svdyoif9", // replace with your ID
  dataset: "production",
  apiVersion: "2023-07-16",
  useCdn: true,
});
