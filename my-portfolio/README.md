<h1 align="center">
  <a href="">
    <img src="/react-p.svg" alt="Project Banner Image">
  </a>
</h1>

# Technigo - React Portfolio Project

# Challanges:

structure and spacing:
-spacing: I originally wanted to pass the different sectionTypes as props in to the gridcomponent, to be able to style all the sections using display grid. This however didnt work as expected, some sectiontypes were overruled by styling for other sectiontypes in the grid.css. Using "gap" in display Grid didnt work as expected either. I first solved this by using inline styling in the grid-component, but then it was harder to add media queries and keeping the code clean at the same time. Instead I solved the problem by using the backgroundcolor-props for articles and projects to add padding to them. For the gap I used flex in the card components and the other sections i styled manually. However - with more time i would redo the Grid.jsx using styled.components instead, to add spacing in all sections and to make the Grid more usable and the code cleaner everywhere.

width and height of images: had to adjust to make it look more like the design on figma.

had to adjust the media queries so the design would be as close to the figma as possible,

## Instructions

[Check this projects instructions here](https://github.com/Technigo/project-portfolio/blob/main/instructions.md)
