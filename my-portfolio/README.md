
# React Portfolio  

I'm using React to build my very own portfolio website. 

## Dependency Installation & Startup Development Server  

This project uses npm (Node Package Manager) to handle its dependencies and run the development server.

```bash
npm i && code . && npm run dev
```

### Project workflow
I began by sketching the layout on paper, mapping out each element (like h2, body, sections, etc.) to visualize the structure. This approach helped me identify reusable components, such as the cards for articles and projects, which share elements like an image, h3, body, and buttons. It also made me notice that the design were missing an h1, and a paragraph tag styled to look like an h3.

After completing the sketch, I focused on typography and global styling by setting up all the CSS variables. Once the foundation was in place, I began adding folders and empty components, and establishing the structure of the app. Finally, I added the code and styling for each component.

### Problems  
**- Finding a good structure**  
I didn't want to start coding before that was set, as I find it hard to reorganize components and code later, especially when there are a lot of changes to make. Hopefully spending time on the structure will make the rest of the project run smoothly.  

**- Creating the components and structure first**  
Since I started by setting up the entire structure of folders and components before adding any code, I found that I needed to create a lot of code at once just to be able to see any content in the app. Most components and CSS files were empty which made other components render without styles or not appear as intended. Some components couldn’t find the files they were trying to import (e.g., Typography, Footer, etc.) due to incorrect file paths. I needed to add some basic styling for each component, some basic code for each component etc. The paths were tricky to set right, and I mixed up some names like using FooterSection when the component was actually named Footer.  

**- The design**  
I made some adjustments to the structure. The original design was missing an h1 but included two different font sizes for h2, so I used h1 for the largest text. In the Skills section, the design used two text/paragraph tags with different font sizes, and the larger one matched the h3 style, so I used h3 for consistency. 

**- Passing content**  
I used a mix of children and explicit props for passing content, so I couldn't see some sections in my app. Went for explicit props since I couldn't really grasp how children actually work. 

**- Overriding the Global styling**  
In a couple of places the different heading tags had different styling. One example is the Date in the ArticleSection, which had heading h3 but font size 1.125rem, and I solved that issue by changing the h3 to a paragraph.  

**- Time**  
I would have needed another week to complete this project. Time was really an issue this week, yet I spent over 20 hours on the course, made a plan, and kept a good pace, and had a lot of help from the components templates we did on the lab, and used ChatGPT to solve issues when I got stuck.  

**- Deploying to Netlify**  
During deployment to Netlify, I encountered several build errors caused by the file paths, even though the paths appeared to be correct and they worked locally. Even Git reported that everything was up to date when I tried to rewrite the imports. In some cases, I had to rename the components to make it work. 

### If I had more time   
1. For the card effect, I found this [CodePen](https://codepen.io/william-goldsworthy/pen/JzVajj) and modified it in [My Code Pen](https://codepen.io/joheri1/pen/GRVxByV). If I had more time, I would apply this. 

2. I would create a component for the image in the Hero and Footer component. 

3. I would used a component for the cards in the CardSection component. 

4. I would create a component for Bio containing the profile image, header, body text, and the social icons/links. This component could then be used in both the Hero and Footer sections. I noticed this while working with the Footer, because I more or less were copying and pasting from the Hero section. 

5. I would use styled components! 

### A handful of useful sources in this project:  
- CodePen was used to test smaller design components, like the borders between the columns in the Skills text section I found this [Code Pen](https://codepen.io/brendanfalkowski/pen/Mwrywj) and modified it in [My Code Pen](https://codepen.io/joheri1/pen/qBeKLVL).  

### View it live
[Visit My Portfolio](https://johanna-eriksson-portfolio.netlify.app/)



