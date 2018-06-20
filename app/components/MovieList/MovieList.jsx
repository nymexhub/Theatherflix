var React = require('react');

var MovieList = React.createClass({
    render: function () {
        return (
            <div className="container">
                <iframe width="150" height="250" src="https://www.youtube.com/embed/hO7mzO83N1Q" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
        )
    }
});

module.exports = MovieList;
