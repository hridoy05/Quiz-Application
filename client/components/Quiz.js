import { Button, Card, Col, Row } from "antd";
import Link from "next/link";
const { Meta } = Card;
import { LoadingOutlined, SafetyOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/auth";

const Quiz = ({quiz}) => {
  const [auth, setAuth] = useContext(AuthContext);
  //const [enroll ,setEnroll] = useState({})
  const router = useRouter();
  // useEffect(() => {
  //   if (auth) checkEnrollment();
  // }, [auth?.token]);

  // const checkEnrollment = async () => {
  //   const { data } = await axios.get(`/api/check-enrollment/${quiz._id}`);
  //   console.log("CHECK ENROLLMENT", data);
  //   setEnrolled(data);
  // };

  const { slug } = router.query;

  const handlePaidEnrollment = async () => {
    // console.log("handle paid enrollment");
    try {
      setLoading(true);
      // check if user is logged in
      if (!auth) router.push("/login");
      // check if already enrolled
      if (enrolled.status)
        return router.push(`/user/course/${enrolled.quiz.slug}`);
      const { data } = await axios.post(`/api/paid-enrollment/${quiz._id}`);
      const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);
      stripe.redirectToCheckout({ sessionId: data });
    } catch (err) {
      toast("Enrollment failed, try again.");
      console.log(err);
      setLoading(false);
    }
  };

  const handleFreeEnrollment = async (e) => {
    // console.log("handle free enrollment");
    e.preventDefault();
    try {
      // check if user is logged in
      if (!user) router.push("/login");
      // check if already enrolled
      if (enrolled.status)
        return router.push(`/user/course/${enrolled.quiz.slug}`);
      setLoading(true);
      const { data } = await axios.post(`/api/free-enrollment/${course._id}`);
      toast(data.message);
      setLoading(false);
      router.push(`/user/course/${data.course.slug}`);
    } catch (err) {
      toast("Enrollment failed. Try again.");
      console.log(err);
      setLoading(false);
    }
  };

    return (
        <div>
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
                {/* enroll button */}
          {/* {loading ? (
            <div className="d-flex justify-content-center mt-3">
              <LoadingOutlined className="h1 text-danger" />
            </div>
          ) : (
            <Button
              className="mb-3 mt-3"
              type="danger"
              block
              shape="round"
              icon={<SafetyOutlined />}
              size="large"
              disabled={loading}
              onClick={quiz.paid ? handlePaidEnrollment : handleFreeEnrollment}
            >
              {user
                ? enrolled.status
                  ? "Go to course"
                  : "Enroll"
                : "Login to enroll"}
            </Button>
          )} */}
                <Meta title={quiz.name} description={quiz.description} />
              </Card>
            </Col>
            </Link>
        </div>
    );
};

export default Quiz;