import React from "react";
import Movie from "./movie";
import theyfall from "../images/theyfall.jpg";
import matrix1 from "../images/matrix1.jpg";
import lastduel from "../images/lastduel.jpg";
import jackass from "../images/jackass.jpg";

export default class MovieList extends React.Component {
    render() {

        let movies = [
            {
                title: "The Harder They Fall",
                image: theyfall,
                plot: "Jeymes Samuel’s revisionist western is bold, brash and highly entertaining; this Gravillis poster follows suit. With its A-Listers cast in shadow there’s a very old school Magnificent 7 vibe going on, but the blue and yellow accents give it that playful edge we’ve come to expect from Samuel.",
                reviews: []
            },
            {
                title: "The Matrix Resurrections",
                image: matrix1,
                plot: "There’s no question that Lana Wachowski’s update to the Matrix franchise is one of the most anticipated films of the year, and this canny design shows that when you’ve got a property this iconic, there’s no need to overthink things. Striking and simple, it’s intriguing for anyone unfamiliar with the series, and a fun little throwback for fans.",
                reviews: []
            },
            {
                title: "The Last Duel",
                image: lastduel,
                plot: "Ridley Scott’s films aren’t usually known for their poster design, so this Legion effort for The Last Duel is quite refreshing. It’s simple but sophisticated, positioning Jodie Comer between the swords of Matt Damon and Adam Driver, who do battle after she accuses the latter of rape. Very Saul Bass.",
                reviews: []
            },
            {
                title: "Jackass Forever",
                image: jackass,
                plot: "Although their fourth movie was delayed from a September 2021 release until February 2022, the Jackass boys have at least gifted us with some posters and a trailer to tide us over before ‘Jackass Forever’ cannonballs into cinemas. This phallic effort, paying homage to the Looney Toons-esque cannon stunt we’ve come to know and love, is a highlight.",
                reviews: []
            }
        ]
        let arr;
        arr = movies.map( (movie, index ) => 
            <Movie title={movie.title} plot={movie.plot} reviews={movie.reviews} image={movie.image} key={index} />
        )
        

        return(
            <div>
                { arr }
            </div>
        )
    } 
}