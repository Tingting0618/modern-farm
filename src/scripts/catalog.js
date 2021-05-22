import { all_Foods } from "./harvester.js"

export const Catalog = () => {

    return `
    <h1>THIS IS A TEST</h1>

    <article class="choices">
        <section class="choices__metals options">
            <h2>Food</h2>
            ${all_Foods()}
        </section>

    </article>

`
}
