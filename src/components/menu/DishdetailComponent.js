import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

class DishDetail extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { dish } = this.props;
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <Card key={`${dish.id}-info`}>
                        <CardImg top width="100%" src={dish.image} alt={`${dish.name}`} />
                        <CardBody>
                            <CardTitle tag="h5">{`${dish.name}`}</CardTitle>
                            <CardText>
                                {dish.description}
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                <div key={`${dish.id}-comment-section`} className="col-12 col-md-5 m-1">
                    <h3 tag="h5">{`${dish.name} - Comments`}</h3>
                    <ul className="list-unstyled">
                        {
                            dish.comments.map(comment => (
                                <li key={`${comment.id}-comment`}>
                                    <p>{comment.comment}</p>
                                    <span>Rating: {"*".repeat(comment.rating)}</span>
                                    <p>-- {comment.author}, {comment.date}</p>
                                </li>
                            ))
                        }
                    </ul>

                </div>
            </div>
        )
    }
}

export default DishDetail;