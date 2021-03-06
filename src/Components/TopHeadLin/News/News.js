import React from 'react';
import {Card, Button} from 'react-bootstrap';
import './News.css';
import Box from '@material-ui/core/Box';



const News = (props) => {
  console.log(props);
  const {title , description, urlToImage} = props.news;

    return (
      <Card className="news-area" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={urlToImage} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    );
};

export default News;