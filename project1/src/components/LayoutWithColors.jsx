import React from "react";
import {connect} from "react-redux";

function LayoutWithColors({children, bgColor, pageTxtColor, cardsTxtColor}){
    return (
    <>
 
        <style>{`

            .class-with-dynamic-colors {
                background-color: `+(bgColor)+`;
                color: `+(pageTxtColor)+`;
            }

            .class-with-dynamic-colors .card {
                color: `+(cardsTxtColor)+`;
            }

          `}</style>

        <div className="pt-3 class-with-dynamic-colors" style={{ flexGrow: 1}}>
            {children}
        </div>
    </>)

}

function mapStateToProps(store){

    return {
      bgColor: store.settings.bgColor,
      pageTxtColor: store.settings.pageTxtColor,
      cardsTxtColor: store.settings.cardsTxtColor
    }
  }

export default connect(mapStateToProps)(LayoutWithColors);