function PostItemPlaceholder({ sizes }) {
  return (
    <div className="col-12 col-lg-3 mb-4">
      <div className="card bg-dark h-100" aria-hidden="true">
        <div className="card-body">
          <h5 className="card-title placeholder-glow">
            <span className={`placeholder col-${sizes[0]} bg-dark`}></span>
          </h5>
          <p className="card-text placeholder-glow">
            <span className={`placeholder col-${sizes[1]} bg-secondary`}></span>
            <span className={`placeholder col-${sizes[2]} bg-secondary`}></span>
            <span className={`placeholder col-${sizes[3]} bg-secondary`}></span>
            <span className={`placeholder col-${sizes[4]} bg-secondary`}></span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PostItemPlaceholder;
