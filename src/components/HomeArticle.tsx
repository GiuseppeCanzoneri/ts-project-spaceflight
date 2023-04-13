import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ArticleComponent from "./ArticleComponent";
import { IArticle } from "../interfaces/IArticle";

const HomeArticle = () => {
  const URL = "https://api.spaceflightnewsapi.net/v4/articles/";

  const [article, setArticle] = useState<IArticle[]>([]);

  const fetchArticle = async () => {
    try {
      const resp = await fetch(URL);
      if (resp.ok) {
        const { results } = await resp.json();
        setArticle(results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchArticle();
  }, []);

  return (
    <>
      <h1 className="text-white display-4 mt-5">Ultime Notizie</h1>

      <Container className="mt-5">
        <Row xs={2} md={4} className="g-5">
          {article.length > 0 &&
            article.map(article => (
              <Col key={article.id}>
                <ArticleComponent article={article} />
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
};

export default HomeArticle;
