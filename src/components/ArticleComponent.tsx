import { Badge, Button, Card } from "react-bootstrap";
import { IArticle } from "../interfaces/IArticle";
import { Link } from "react-router-dom";

interface ArticleComponentProps {
  article: IArticle;
}

const ArticleComponent = ({ article }: ArticleComponentProps) => {
  return (
    <Card className="h-100 ">
      <Card.Text>
        {" "}
        <Badge className="bg-dark h-100"> {article.news_site} </Badge>{" "}
      </Card.Text>
      <Card.Img variant="top" src={article.image_url} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{article.title}</Card.Title>
        <Card.Text>
          <span className="fw-bold ">Published at: </span>
          {article.published_at}
        </Card.Text>
        <Link to={`/details/${article.id}`}>
          <Button variant="primary">Dettagli</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ArticleComponent;
