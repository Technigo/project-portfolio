# PORTFOLIO

**Mission:** 
- *Create my very own portfolio based on Technigo deign guidelines and make sure EVERYONE can use the site!*

**Requirements:**

🔵 Blue level
- [x] The page should be built with HTML and CSS (JS if needed)
- [x] You should use flexbox for layout (you can use CSS grid if you're comfortable with that).
- [x] The page should be fully responsive. (mobile, tablet and desktop)
- [x] The page should look and function the same on Chrome, Firefox, and Edge.
- [x] The page should work well for people that use screen readers and keyboard navigation.
- [x] The HTML code should validate in a validation tool.

⚫ Black level
- [x] Give your portfolio a custom domain and connect to your deployed site.


***

## Workflow

### The Layout
I began by working through the design provided to us by Technigo. I decided to add sections from top to bottom (i.e. Header->Footer). After I had completed a section I tested it (see testing process below) to make sure everything worked as intended. 

<br>

### Testing
After a section was complete I went through a loose testing checklist I made for myself.

> 1. Screenreader (Win 10, Chrome, Application: [NVDA](https://www.nvaccess.org/))
>   - Are the elements available to the screen reader in the correct order?
>   - Navigate through the section while closing my eyes. Can I do it and understand what the section contains?
> 2. Keyboard navigation
>   - If the section contains any links or interactions, make sure I can navigate through them and to them using only the keyboard.
> 3. Responsiveness
>   - Make sure the section looks the same in the following formats:
>       - Phone
>       - Tablet
>       - Desktop
>       - 4K resolutions
> 4. Crossbrowser testing (full test to be done on website compl.)
>   - Make sure the section works the same in Chrome as in Firefox and Edge

<br>

### Testing with a screenreader
After doing some research I found that if you only have the time to do *some* screenreader testing you should do it using [NVDA](https://www.nvaccess.org/). It is currently the most common application used by people in need. 

So I downloaded it and began to use it. It took me a few hours before I got some usability from it. I also learned (from various blogs and instructionals) that screen readers have quick-commands that users utilize when browsing the web (such as the *View all Landmarks* and *Get all lists* or *Get all links*). Since those are function people commonly use when using a screen reader I decided to make sure that my site was easy to experience using those short commands. 

One change I had to do for that to work was to change how I displayed my projects and blog posts. Instead of using an article tag it was apparently more useful for accessibility tools to have them listed using `<ul></ul>`.

So I changed this:
```js
<div class="projects__flexbox">
    <article class="project project--feature" aria-labelledby="project2">
    <a href="http://google.com" target="_blank" rel="external">
        <div class="project__title">
            <h2 class="project" id="project2">PROJECT TITLE</h2>
        </div>  
        <p class="project__description">DESCRIPTION OF TITLE.</p>
        <p class="project__text">Write short what the project is about and what technoglogies you’ve used.</p>       
    </a>
    </article>
</div>
```
INTO THIS:
```js
<ul class="cards__list" aria-label="List of Featured Projects">
    <li class="card" aria-labelledby="projectID">
        <div class="card__title--featured">
            <img src="./assets/project-alex.png" alt="screenshot from the game" />
            <h2 class="featured">
                <a href="https://google.com" target="_blank" id="projectID">MY TITLE</a>
            </h2>
        </div>
        <p class="primary primary--bold">DESCRIPTION OF TITLE.</p>
        <p>Write short what the project is about and what technoglogies you’ve used.</p>
    </li>
</ul>
```

> 💡 The intersting change here is that when using an `<ul>` the screen reader will actually give the user a good overview of all the lists on the site, since that tag has the `aria-role="list"` as default. 

<br>

> ‼️ PLEASE NOTE: I did not come up with this design. When doing my research into writing good html for screen readers almost everyone recommended (apart from the official guidelines of course) a website promoting inclusive html design components. This is the [LINK](https://inclusive-components.design/)
> I also noticed that using a pseudo element to make the link work is what is expected in accessibility. Found [THIS](https://css-tricks.com/a-complete-guide-to-links-and-buttons/) article about that.

<br>

### Creating a dynamic data system
Since I knew I was going to add to this project throughout the weeks of this bootcamp, I wanted to create a solution for me to do so easily without having to go into the html file. 

So I made a few functions in the **app.js** file that loads in some javascript objects with data. That data is then rendered onto the site using my "templates".

I also think that in the future, after we've worked with databases and React templates, I can migrate this website into using those methodologies with ease since the deisgn is already made with a dynamic system in mind.  

<br>

### The final testing suite
Finally the website was done! It looked great and worked as intended, or so I hoped at least. It was indeed time for the last test suite. I had already before-hand made an extensive list of what platforms to test on.

For all cross-platform and cross-browser testing I used [lambdatest](https://app.lambdatest.com/console/realtime). A somewhat free service to test multiple devices. 

Here is the list I used:
- Responsive:
  - mobile
    - iphone x
    - iphone 6/7/8
    - motog4            
  - tablet
    - ipad
    - ipad pro
  - desktop
    - laptop hidpi
    - laptop mdpi
    - 4k 2560px
- Crossbrowser:
  - Desktop:
    - chrome
      - win10
      - macOS
    - edge
      - win10
      - macOS
    - firefox
      - win10
      - macOS
  - safari (any major issue??)
      - macOS
  - Mobile:
    - chrome (iphone)
    - edge (iphone)
    - firefox (iphone)
    - safari (iphone) - only major issues!
- Accessibility:
  - keyboard navigation
  - screen reader
- Verification tool:
  - run lighthouse (chrome devtools)
  - run wave evaltool

***

## Reflections
 

**ISSUES**

- This project was harder than I first anticipated. Getting to know the screen reader and understanding the best practices required a lot of time and research.
- Working with CSS and trying to make the site dynamic and responsive is not easy. It took me a lot of trial and error to find good methodology for alignments. My main issues seem to revolve around styling nested elements. Sometimes the nested elements don't listen to the parent element. Example: If my child element has a width of 100%; then shouldn't the actual pixel width of that child be 100% of the parents width? One would think so, but the elements doesn't always follow this rule. It is very time consuming trying find a workaround on these issues. 
- Working with CSS took most of my time, but that is good cause I got lots of practice. I do feel I am missing some more lectures on best practices in CSS. I always get where I am supposed to go, but the the journey there is a long and hard one.

<br>

If I were to continue on this project / start over I would:
- Redo the social links. Look into the og-tags and also maybe use font-awsome instead of svgs.
- In future iterations of this project I hope to refactor my code to work with React and/or some data structures.
  
<br>

***

## View it live
https://bellsibub.me

