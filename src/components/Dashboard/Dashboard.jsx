// import "./styles.css";
import Home from "./Home";
import Home1 from "./Home1";
// import Home2 from "./Home2";
import About from "./About";
import Navbar from "./Navbar";
import Contacts from "./Contacts";
import Contact from "./Contact";
import NewContact from "./NewContact";
import { Routes, Route, Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div className="App">
      <h1>Welcome to dashboard</h1>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />}>
          <Route path=":id" element={<Home1 />} />
          {/* <Route path="2" element={<Home2 />} /> */}
        </Route>
        <Route path="about" element={<About />} />
        <Route path="contacts" element={<Contacts />}>
          <Route path=":id" element={<Contact />} />
          <Route path="new" element={<NewContact />} />
        </Route>
      </Routes>
    </div>
  );
}
