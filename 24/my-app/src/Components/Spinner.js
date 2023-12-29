import React from 'react';
class Spinner extends React.Component{
  render() {
    return <div id="spinner" className="spinner-border text-light">
      <span className="visually-hidden"></span>
    </div>
  }
}
export default Spinner;