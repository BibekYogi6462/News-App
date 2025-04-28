const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-light text-dark mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{ maxWidth: "345px" }}
    >
      <img
        src={src || "https://via.placeholder.com/345"}
        className="card-img-top"
        alt="news"
        style={{ height: "200px", width: "330px" }}
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">
          {description
            ? description.slice(0, 90)
            : "Stay in the loop with daily headlines that provide you with everything you need to know, from politics to science."}
        </p>
        <a
          href={url}
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
