import React from "react";

const Suggestions = (props) => {
  // console.log(props.results)

  const options = props.results.map((results) => (
    <div className="row" id="pop-row">
      <div className="card-deck flex-nowrap hoverable " id="pop-cards">
        <div className="card view overlay zoom " id="card" key={results._id}>
          <img
            className="card-img-top img-fluid"
            src={
              results.image && results.image.length
                ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${results.image[0].photo_reference}&key=AIzaSyD-ZEsqd3Rb5IAswQGexgebUa81e6iuDJQ`
                : "https://i.ibb.co/LJT0XW5/placeholder-001.jpg"
            }
            alt="safestance-cards"
            id="card-image"
          ></img>
          <div className="card-body">
            <a href={`/business/${results._id}`}>
              <h5 className="card-title">{results.bizname}</h5>
            </a>

            <p className="card-text">{results.address}</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">
              Currently in-store: {results.instore}
            </small>
          </div>
        </div>
    
      </div>
    </div>
  ));
  return <>{options}</>;
};

export default Suggestions;
