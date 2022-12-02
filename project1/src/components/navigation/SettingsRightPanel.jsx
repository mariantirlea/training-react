import {connect} from "react-redux";
import { changeBgColor, changeDemoMode, changePageTxtColor, changeCardsTxtColor } from "../../redux/actions/settings.actions";

function SettingsRightPanel({bgColor, pageTxtColor, cardsTxtColor, isDemo, changeBgColor, changePageTxtColor, changeCardsTxtColor, changeDemoMode}){

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

          <div className="row">
            <div className="col-sm-12 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Fundal</h5>
                  <p className="card-text">{bgColor}</p>
                  <input
                    type="color"
                    value={bgColor}
                    onChange={(e) => changeBgColor(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Text cutiuțe</h5>
                  <p className="card-text">{cardsTxtColor}</p>
                  <input
                    type="color"
                    value={cardsTxtColor}
                    onChange={(e) => changeCardsTxtColor(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Text pagini</h5>
                  <p className="card-text">{pageTxtColor}</p>
                  <input
                    type="color"
                    value={pageTxtColor}
                    onChange={(e) => changePageTxtColor(e.target.value)}
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
            <input className="form-check-input" type="checkbox" id="switchDemoMode" onChange={(e) => changeDemoMode(e.target.value)} value={isDemo}/>
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

function mapStateToProps(store){

  return {
    bgColor: store.settings.bgColor,
    pageTxtColor: store.settings.pageTxtColor,
    cardsTxtColor: store.settings.cardsTxtColor,
    isDemo: store.settings.isDemo
  }
}

function dispatchToProps(dispatch){
  return {
    changeBgColor: (color) => dispatch(changeBgColor(color)),
    changePageTxtColor: (color) => dispatch(changePageTxtColor(color)),
    changeCardsTxtColor: (color) => dispatch(changeCardsTxtColor(color)),
    changeDemoMode: (isDemo) => dispatch(changeDemoMode(isDemo))
  }
}

export default connect(mapStateToProps, dispatchToProps)(SettingsRightPanel);