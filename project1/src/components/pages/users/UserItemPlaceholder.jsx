function UserItemPlaceholder({ sizes }) {
  return (

    <div className="col-12 col-md-4 mb-4">      
      <div className="card bg-dark h-100" aria-hidden="true">
        <div className="card-body">
          <h5 className="card-title placeholder-glow">
            <span className={`placeholder col-${sizes[0]} bg-secondary`}></span>
          </h5>
          <hr style={{color: '#c6c6c6'}}/>
          <p className="card-text placeholder-glow" style={{marginBottom: '0px'}}>
            <span className={`placeholder col-${sizes[1]} bg-secondary`}></span>
          </p>
          <p className="card-text placeholder-glow" style={{textAlign: 'right'}}>
            <span className={`placeholder col-${sizes[2]} bg-secondary`}></span>
          </p>
          <br/><br/><br/><br/><br/>
          <p className="placeholder-glow" >          
            <a href="#" tabIndex="-1" className="btn btn-outline-danger disabled placeholder col-3 position-absolute" style={{right: '10px', bottom: '10px'}}></a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserItemPlaceholder;
