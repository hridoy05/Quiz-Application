import { Button, Card, Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import Quiz from "../components/Quiz";
const { Meta } = Card;
const Quizes = () => {
  
  const [quizes, setAllQuizes] = useState("");
 
  // hooks
  const router = useRouter();
  // state

  useEffect(() => {
    // if (auth?.token)
    loadQuizes();
  }, []);

  const loadQuizes = async () => {
    try {
      const { data } = await axios.get("/quizes");
      setAllQuizes(data);
    } catch (err) {
      console.log(err);
    }
  };
  
  return (
    <div
      className="site-card-wrQuizeser "
      style={{
        width: "90%",
      }}
    >
      <Row gutter={24} style={{ padding: "10px" }}>
        {quizes &&
          quizes.map((quiz) => (
            <Quiz
              quiz={quiz}
            />
          ))}
      </Row>
    </div>
  );
};

export default Quizes;
