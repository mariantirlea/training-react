import { Component } from "react";

class SettingsRightPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bgColor: "#ffffff",
      txtColor: "#000000",
      isDemo: false
    }

    this.updateParent();
  }

  updateParent() {
    this.props.onSettingsChange({ ...this.state });
  }

  applyBgColor(e) {
    this.setState({bgColor: e.target.value}, () => this.updateParent());
  }

  applyTxtColor(e) {

    this.setState({txtColor: e.target.value}, () => this.updateParent());
  }

  handleDemoChange(e){
    this.setState({isDemo: e.target.checked}, () => this.updateParent());
  }

  render() {
    return (
      <div
        className="offcanvas offcanvas-end"
        data-bs-scroll="true"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">
            Stil pagină și text
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          {/* <input type="color" value={this.state.bgColor} onChange={e => this.applyBgColor(e)} />
          <p>{this.state.bgColor}</p>
          <input type="color" value={this.state.txtColor} onChange={e => this.applyTxtColor(e)} />
          <p>{this.state.txtColor}</p> */}

          <div className="row">
            <div className="col-sm-6">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Fundal</h5>
                  <p className="card-text">{this.state.bgColor}</p>
                  <input
                    type="color"
                    value={this.state.bgColor}
                    onChange={(e) => this.applyBgColor(e)}
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Text (postări)</h5>
                  <p className="card-text">{this.state.txtColor}</p>
                  <input
                    type="color"
                    value={this.state.txtColor}
                    onChange={(e) => this.applyTxtColor(e)}
                  />
                </div>
              </div>
            </div>
          </div>

          <br/>
          <h5 className="offcanvas-title mb-4" id="offcanvasRightLabel">
            Setări generale
          </h5>

          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="switchDemoMode" onChange={(e) => this.handleDemoChange(e)} value={this.state.isDemo}/>
            <label className="form-check-label" htmlFor="switchDemoMode">Mod prezentare</label>
          </div>
          <div id="emailHelp" className="form-text">Când acesta este activat, următoarele funcționalități sunt disponibile:</div>
          <ul className="form-text">
            <li>aplicația simulează o conexiune slabă pentru a vedea cum sunt încărcate datele pe ecran</li>
            <li>formularul de adăugare utilizator nou conține valori inițiale</li>
          </ul>

        </div>
      </div>
    );
  }
}

export default SettingsRightPanel;
