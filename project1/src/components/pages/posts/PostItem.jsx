function PostItem({ title, body }) {
  return (
    <div className="col-12 col-lg-3 mb-4">
      <div className="card bg-dark h-100">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{body}</p>
        </div>
      </div>
    </div>
  );
}

export default PostItem;
