import { useContext } from "react";
import { AuthContext } from "../context/auth";
import Quizes from "./quizes";

function Home() {
  return (
    <div>
      <h1>Home</h1>

      <br />
     <Quizes/>
    </div>
  );
}

export default Home;
