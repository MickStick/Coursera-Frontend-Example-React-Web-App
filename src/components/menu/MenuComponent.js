import React, { Component } from 'react';
import {
    Media, Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle,
    CardSubtitle, Row, Col
} from 'reactstrap';
import DishdetailComponent from './DishdetailComponent';

class MenuComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedDish: String("")
        }

        this.onSelectDish.bind(this)
        // this.toggleModal().bind(this)
    }

    onSelectDish(dish) {
        if (this.state.selectedDish !== "") {
            if (this.state.selectedDish.name === dish.name) {
                this.setState({
                    selectedDish: String("")
                })
            } else {
                this.setState({
                    selectedDish: dish
                })
            }
        } else {
            this.setState({
                selectedDish: dish
            })
        }

    }

    renderComments(dish) {
        if (dish) {
            return (
                <div key={`${dish.id}-comment-section`} className="col-12 col-md-5 m-1">
                    <h3 tag="h5">{`${dish.name} - Comments`}</h3>
                    {
                        dish.comments.map(comment => (
                            <div key={`${comment.id}-comment`}>
                                <p>{comment.comment}</p>
                                <span>Rating: {"*".repeat(comment.rating)}</span>
                                <p>-- {comment.author}, {comment.date}</p>
                            </div>
                        ))
                    }

                </div>
            )
        }
    }

    renderDish(dish) {
        if (dish) {
            return (
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
            )
        }
    }

    render() {
        const { dishes } = this.props;
        const { selectedDish } = this.state;

        return (
            <div className="container">
                <div className="row">
                    {dishes ? dishes.map(dish => (
                        <div className="col-12 col-md-5 m-1">
                            <Card key={dish.id}
                                onClick={() => this.onSelectDish(dish)}>
                                <CardImg width="100%" src={dish.image} alt={dish.name} />
                                <CardImgOverlay>
                                    <CardTitle>{dish.name}</CardTitle>
                                </CardImgOverlay>
                            </Card>
                        </div>
                    )) : null}

                </div>
                {
                    selectedDish ? <DishdetailComponent dish={selectedDish}/> : null
                }
            </div>
        );
    }
}

export default MenuComponent;