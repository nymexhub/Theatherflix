var React = require("react");
var { Link } = require("react-router");

var MovieList = React.createClass({
  render: function() {
    return (
      <div className="container">
        <link to="/sleepers">
          <img
            src="./movies-imgs/sleepers.jpg"
            border="0"
            width="120px"
            height="178px"
          />
        </link>
        <link to="/jobs">
          <img
            src="./movies-imgs/jobs.jpg"
            border="0"
            width="120px"
            height="178px"
          />
        </link>
        <link to="/claireinmotion">
          <img
            src="./movies-imgs/claireinmotion.jpg"
            border="0"
            width="120px"
            height="178px"
          />
        </link>
        <link to="/looper">
          <img
            src="./movies-imgs/looper.jpg"
            border="0"
            width="120px"
            height="178px"
          />
        </link>
        <link to="/wofw2005">
          <img
            src="./movies-imgs/wofw2005.jpg"
            border="0"
            width="120px"
            height="178px"
          />
        </link>
        <link to="/silence">
          <img
            src="./movies-imgs/silence.jpg"
            border="0"
            width="120px"
            height="178px"
          />
        </link>
        <link to="/interestelar">
          <img
            src="./movies-imgs/interestelar.jpg"
            border="0"
            width="120px"
            height="178px"
          />
        </link>
        <link to="/americanhistoryx">
          <img
            src="./movies-imgs/americanhx.jpg"
            border="0"
            width="120px"
            height="178px"
          />
        </link>
      </div>
    );
  }
});

module.exports = MovieList;
