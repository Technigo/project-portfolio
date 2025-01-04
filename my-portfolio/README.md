<h1 align="center">
  <a href="">
    <img src="/react-p.svg" alt="Project Banner Image">
  </a>
</h1>

# Technigo - React Portfolio Project

This project is a portfolio built using React, following a design provided by a UX designer on Figma. The goal was to replicate the design as closely as possible while using reusable components for scalability and maintainability.

Overall Layout
I structured the project using reusable components, such as Typography, Buttons, and Grid. These components were then passed into various section components to construct the layout. To ensure the design matched the Figma prototype as closely as possible, I utilized media queries for adjusting spacing and layouts across different screen sizes.

# Challanges:

- Structure:
  The structure of the app was one of the main challenges. Initially, I aimed to use as many reusable components as possible to keep the larger components clean and maintainable. However, as the project evolved, it became more challenging to keep the parent components dry. This led to the need for adding additional logic and styles directly into those parent components to achieve the desired layout.

- Spacing Issues:
  I initially tried passing different sectionTypes as props into the Grid component to style all sections using display: grid. However, some sectionTypes were being overridden by styles in the Grid.css, leading to unexpected layout issues.
  Using gap in display: grid didn’t work as expected either, causing layout inconsistencies.

- Solution:
  I first addressed this by using inline styling within the Grid component. However, it became harder to add media queries while keeping the code clean. Instead I solved this by using the backgroundColor prop for the article and project sections to add padding, and I used Flexbox in the card components to manage spacing. The other sections were styled manually. However, with more time, I would refactor the Grid.jsx to use styled-components for better flexibility in spacing and more maintainable code.

- Image Sizing:
  I had to adjust the width and height of the images to ensure they matched the Figma design, this was done by tweaking the CSS for image containers and testing across different screen sizes.

- Media Queries:
  The media queries required several adjustments to ensure that the layout remained responsive and close to the Figma design.

If I had more time I would:

- Use styled.components for better code organization and flexibility.
- Simplify the structure to avoid unnecessary components.
- Replace px with rem for better scalability and accessibility.
- Clean up the code to remove redundancy.
- Improve media queries for a more user-friendly layout

# View it live:

https://fannys-portfolio.netlify.app/

## Instructions

[Check this projects instructions here](https://github.com/Technigo/project-portfolio/blob/main/instructions.md)
