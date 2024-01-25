import { html } from "hono/html";
import Hero from "../components/Hero";

export default function IndexPage(){
    return html`
    ${Hero()}
    `
}