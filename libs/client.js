import { createClient } from "microcms-js-sdk";

export const client = createClient({
    serviceDomain: "blog-micrcms",
    apiKey: process.env.API_KEY,
});
