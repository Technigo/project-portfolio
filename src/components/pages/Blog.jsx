import Wiggly from "/src/assets/wiggly-line.png"
import Code from "/src/assets/code.png"
import Tag from "/src/components/Tag.jsx"
import Button from "/src/components/Button.jsx"
import "./blog.css"

export default function Blog() {
  return (
    <div className="page" style={{ padding: "0" }}>
      <div className="wiggly-line-container">
        <img
          className="wiggly-line-img"
          src={Wiggly}
          alt="a wiggly pink line"
        />
        <div className="blog-container" style={{ textAlign: "start" }}>
          <h1 className="my-words" style={{ color: "black" }}>
            My words
          </h1>
          <img className="code-img" src={Code} alt="img of code" />
          <Tag text={"July 2023"} />
          <h4 style={{ color: "black" }}>
            A presentation of thoughts on code:
          </h4>
          <p
            style={{
              color: "black",
            }}
          >
            <span className="highlighted-text">In the realm of coding</span>, I
            find myself continually captivated by the sheer versatility and
            power it holds. Code is not merely a set of instructions but rather
            a{" "}
            <span className="highlighted-text">
              gateway to creativity, problem-solving, and innovation
            </span>
            . At its core, code embodies the essence of logic and structure, yet
            it also thrives on the creativity of its creators. The ability to
            translate complex ideas into elegant lines of code is both an art
            and a science. It&apos;s about finding the perfect balance between
            functionality and simplicity, efficiency and readability.
            <br />
            <br />
            &nbsp;
            <br />
            <br />
            One of the most fascinating aspects of code is its{" "}
            <span className="highlighted-text">universal language</span>
            . Regardless of geographical boundaries or cultural differences,
            code serves as a common ground for communication and collaboration.
            It&apos;s a language that transcends barriers and enables
            individuals from diverse backgrounds to come together and build
            something meaningful.
            <br />
            <br />
            &nbsp;
            <br />
            <br />
            Moreover, code is{" "}
            <span className="highlighted-text">
              inherently dynamic and ever-evolving
            </span>
            . It&apos;s a field where learning never stops, and every challenge
            presents an opportunity for growth. The rapid pace of technological
            advancement ensures that there&apos;s always something new to
            explore, whether it&apos;s a cutting-edge framework, a revolutionary
            algorithm, or a groundbreaking application.
            <br />
            <br />
            &nbsp;
            <br />
            <br />
            Yet, amidst the excitement and innovation, it&apos;s essential to
            remember the human aspect of coding. Behind every line of code lies
            the intention, the creativity, and the passion of its creator.
            It&apos;s about understanding the needs of users, empathizing with
            their experiences, and striving to make a positive impact on the
            world.
            <br />
            <br />
            &nbsp;
            <br />
            <br />
            In essence, code is not just about building software; it&apos;s
            about <span className="highlighted-text">shaping the future</span>.
            It&apos;s about harnessing the power of technology to solve
            real-world problems, inspire change, and drive progress. And as we
            navigate this ever-changing landscape of code, let us{" "}
            <span className="highlighted-text">
              never forget the profound impact
            </span>{" "}
            that our thoughts and actions can have on the world around us.
          </p>
          <Button
            text="Read article"
            icon="/img/notepad.svg"
            url={"https://google.com"}
            hoverColor="#FFD338"
            
          />
        </div>
      </div>
    </div>
  )
}
