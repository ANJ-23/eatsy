/* 
SEARCH PARAMETERS: 
https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL#parameters
*/

// prints ID parameter in URL; ID is obtained because of Next.js magic
// URL params are based off the /app folder's structure (ex. localhost:3000/recipes-results/333 --> ./app/recipes-results/[id]/page.tsx, where '333' is the [id] parameter)

// this Page has two URL parameters: 'params' and 'searchParams'
// 'params' - (indicated by [query] folder)
// 'searchParams' - dynamically changes based on the search query (the thing after /results/?q=...)
export default function Page({
    params,
    searchParams,
}: {
    params: { query: string }
    searchParams: { [key: string]: string | string[] | undefined }
}) {
    return (
        <div>
            <h1>params: {params.query}</h1>
            <h2>searchParams: {searchParams.key}</h2>
        </div>
    )
}