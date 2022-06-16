import React from 'react';
import { Link } from 'react-router-dom';
function Card({ data }) {
  const download = (e) => {
    console.log(e.target.href);
    fetch(e.target.href, {
      method: 'GET',
      headers: {},
    })
      .then((response) => {
        response.arrayBuffer().then(function (buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', 'image.png'); //or any other extension
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="col-lg-3 col-md-3 col-2 my-4">
      <div className="card">
        <img className="card-img-top" src={data.url} />
        <div className="card-body">
          <h5 className="card-title">{data.title}</h5>
          {/* <Link className="btn btn-danger">Show details</Link> */}
          <a href={data.url} download target="_blank" onClick={download}>
            <i className="fa fa-download" />
            Download
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
