import React from "react";
import { Movies } from "../components/Movies"
import { Search } from "../components/search";
import { Placeholder } from "../components/placeholder";
class Main extends React.Component{
        state = {
            movies:[],
            loading: true,
        };

    componentDidMount(){
        fetch('http://www.omdbapi.com/?apikey=88ba74f5&s=matrix')
            .then((response) => response.json())
            .then((data) => this.setState({movies:data.Search, loading:false}));
    }

    searchMovies = (str, type = "all") =>{
        fetch(
            `http://www.omdbapi.com/?apikey=88ba74f5&s=${str}${
                type !== "all" ? `&type=${type}` : ""
            }`
        )
            .then((response) => response.json())
            .then((data) => this.setState({ movies: data.Search, loading:false }));
    };
    render() {
        const {movies, loading} = this.state;
        
        return(
            <main className = "contaner content">
                <Search searchMovies={this.searchMovies} />
                { loading ? <Placeholder/> : <Movies movies = {this.state.movies}/>}
            </main>
        )
    }
}   

export { Main };