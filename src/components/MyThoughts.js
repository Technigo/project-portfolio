import React from 'react'

import './MyThoughts.css'

export const MyThoughts = () => {
  return (
    <section className="my-thoughts-container">
      <h4 className="my-thoughts-heading">MY THOUGHTS</h4>
      <h4 className="my-thoughts-heading-desktop">MY THOUGHTS ABOUT CODE</h4>
      <section className="article-container">
        <article className="article-card">
          <a href="https://medium.com/p/60fa47a38e3f/edit" target="_blank" rel="noopener noreferrer" aria-label="Link will open in new tab">
            <img className="article-img" src="./assets/images/goran-ivos-idmvPhF8t4E-unsplash.jpg" alt="Table with laptop and teapot" />
            <h6 className="article-date">APRIL 2021</h6>
            <h6 className="article-heading">5 Reasons Why I Thought Front<br />End Development Would <br />Be For Me</h6>
            <p className="article-text">It's mid-April 2021 and I'm half way through<br />a 24-weeks incredibly intense high paced<br />
            remote Boot Camp learning who to<br />...write code! Something I've never ever<br />
            done before, but always had in the back of<br />my head could be something for me <span className="forward-symbol">>></span>
            </p>
          </a>
        </article>
        <article className="article-card-desktop">
          <a href="https://medium.com/p/776c5101e37a/edit" target="_blank" rel="noopener noreferrer" aria-label="Link will open in new tab">
            <img className="article-img" src="./assets/images/peter-f-XURJBJi_wDE-unsplash (1).jpg" alt="Colorful pastel crayon set" />
            <h6 className="article-date">MAY 2021</h6>
            <h6 className="article-heading">I ❤ CSS!</h6>
            <p className="article-text">I wrote my first lines of CSS code about 10<br />months ago. Love. At. First. Sight! I have<br />
            been working with photo editing, technical<br />drawings and layouts in Adobe Creative<br />
            Suite previously - but this was a something<br />new entirely. It felt really powerful to slowly
              <br />but steadily transform the plain mundane<br /> HTML data into something else <span className="forward-symbol">>></span>
            </p>
          </a>
        </article>
      </section>
    </section>
  )
}