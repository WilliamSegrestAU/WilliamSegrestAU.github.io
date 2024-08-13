# williamsegrest.dev

This repository contains the source code for William Segrest's personal website.

## Working with Tailwind CSS

To ensure that your styling changes in HTML or CSS work properly with Tailwind, follow these steps:

1. Make your changes to the HTML or CSS files as needed.

2. Open your terminal.

3. Run ```npm run build:style``` (look at ```build:style``` script defined in ```package.json``` file)

4. Keep this command running while you're working on the site. It will automatically update ```./dist/style.css``` whenever you make changes.

### Why is this necessary?

Tailwind CSS needs to process your CSS file to include only the classes you're actually using in your HTML. This command ensures that your final stylesheet is always up-to-date with your latest changes.

If you forget to run this command, your styling changes may not appear on the website.

