import { Button, Card, Col, Row } from "antd";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
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
      className="site-card-wrQuizeser"
      style={{
        width: "90%",
      }}
    >
      <Row gutter={24} style={{ padding: "10px" }}>
        {quizes &&
          quizes.map((quiz) => (
            <Link href={`/quiz/${quiz.slug}`}>
            <Col span={8}>
              <Card
                hoverable
                style={{
                  width: 340,
                }}
                cover={
                  <img
                    alt="example"
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--KkScstnJ--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zojuy79lo3fn3qdt7g6p.png"
                  />
                }
              >
                <Button>{quiz.paid ? `Paid` : `Free`}</Button>
                <Meta title={quiz.name} description={quiz.description} />
              </Card>
            </Col>
            </Link>
          ))}
      </Row>
    </div>
  );
};

export default Quizes;
