import React from 'react';
import ReviewButton from './review-button';
import ReviewList from './review-list';
import StarRating from "./star-rating";
import './movie.css';

export default class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            image: props.image,
            plot: props.plot,
            reviews: props.reviews
        }
        this.setReviews = this.setReviews.bind(this)
    }
    
    setReviews(e) {
        let newReview = e.target.previousElementSibling.previousElementSibling.previousElementSibling.value
        this.setState( state => {
            if ( state.title === e.target.name ) {
                state.reviews.push(newReview)
                return {reviews: state.reviews }
            }
        })

    }

    render() {
        return(
            <div className="row my-5">
                <div className="card mx-auto" style={{ width: "60%" }}>
                    <div className="card-body">
                        <h5 className="card-title">{this.state.title}</h5>
                        <p className="card-text">
                            <img src={this.state.image} alt="iron man" /><br />{this.state.plot}</p>
                    </div>
                    <ReviewList reviews={this.state.reviews} />
                    <StarRating stars={this.state} />
                    <ReviewButton onClick={ (e) => this.setReviews(e) } name={this.state.title} />
                </div>
            </div>
        ) 
    }
}