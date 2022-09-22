function UserForm() {
  return (
    <div style={{ padding: 20 }}>
      <h3>Adauga utilizator</h3>

      <br />
      <form>
        <div className="form-group">
          <label htmlFor="txtNume">Nume</label>
          <input
            id="txtNume"
            className="form-control"
            type="text"
            placeholder="Nume si prenume"
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="txtEmail">Email</label>
          <input
            id="txtEmail"
            className="form-control"
            type="email"
            placeholder="Adresa de email"
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="ckGold">Client GOLD &nbsp;</label>
          <input id="ckGold" className="form-check-input" type="checkbox" />
        </div>
        <br />
        <button type="submit" className="btn btn-dark">
          Adauga
        </button>
      </form>
    </div>
  );
}

export default UserForm;
