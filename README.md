# Eatsy

## Description

Eatsy is a full-stack website for users to look up recipes for meals. Users can also create an account, log in, and save searched recipes for later viewing.

This app uses Next.js and Vercel for web deployment, Prisma and MongoDB for managing & storing user databases, Tailwind CSS for styling, and Spoonacular for recipe searching.

## Usage

Open the website (<>), then search for a meal on the top search bar. Clicking on a result opens a recipe website in a new tab.

Recipes can also be saved after signing in:

1. Click on the "Sign In" button on the upper right corner of the website.
2. In the center of the page, click on the "Don't have an account? Sign up!" prompt below the "Sign In" button.
3. Type a username and password in the form, then click on the "Create New Account" button.
4. Enter the same username and password in the login page, then click "Sign In."
5. Search for a recipe in the upper-middle search bar (type the name of a meal, then either press 'Enter' or click on the magnifying glass icon).
6. Click on a heart next to a corresponding recipe to save it.
7. To access saved recipes, click on the "Saved Recipes" button at the upper-right corner.

![Easty - Front Page](public/eatsy_front_page.jpg)
![Easty - Saved Recipe Page](public/eatsy_saved_recipes.jpg)

## Credits

- Vercel for developing Next.js & providing the ``create-next-app`` boilerplate to build off of.
  - Boilerplate: <https://vercel.com/templates/next.js/nextjs-boilerplate>
  - GitHub: <https://github.com/vercel/vercel/tree/main/examples/nextjs>

- Spoonacular for developing the RESTful API for food search & database purposes.
  - Website: <https://spoonacular.com/food-api>

- Cuperto for designing the chef hat favicon.
  - Profile: <https://www.flaticon.com/authors/cuputo>

## License

MIT License

Copyright (c) [2023] [Andrew Joo]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
