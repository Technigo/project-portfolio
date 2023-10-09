import { Intro } from './components/Intro'
import { Tech } from './components/Tech'
import { Project } from './components/Project'
import  Contact  from './components/Contact'
import { Header } from './components/Header'

export const App = () => {
  const name = "So Youn Choi";
const email = "fakemail@fakemail.jpg";
const linkedinLink = "https://www.linkedin.com/in/so-youn-choi-703270212/";
const githubLink = "https://github.com/catfooo";
const stackoverflowLink = "https://stackoverflowteams.com/c/technigo/users/490/?tab=profile";

    return (
    <form>
      <Header
  name={name}
  email={email}
  linkedinLink={linkedinLink}
  githubLink={githubLink}
  stackoverflowLink={stackoverflowLink}
/>
      <Intro />
      <Tech />
      <Project />
      <Contact />
      </form>
)};
