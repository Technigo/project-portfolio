import { useState } from "react";
import { ProjectList } from "./Components/ProjectList";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return <ProjectList />;
}

export default App;
