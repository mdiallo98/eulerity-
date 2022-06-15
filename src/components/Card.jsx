import React from 'react';

function Card({ data }) {
  return (
    <div className="col-lg-3 col-md-3 col-2 my-4">
      <div className="card">
        <img
          className="card-img-top"
          src={data.url}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src =
              'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-1-1-816x576.jpg';
          }}
        />
        <div className="card-body">
          <h5 className="card-title">{data.title}</h5>

          {/* <Link to={detailUrl} className="btn btn-danger">
                Show details
              </Link> */}
        </div>
      </div>
    </div>
  );
}

export default Card;
