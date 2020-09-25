import React from 'react';

class OnOff extends React.Component {
  constructor(props) {
    super(props);
    this.updateCheckbox = this.updateCheckbox.bind(this);
  }


  updateCheckbox(event){
    this.props.update('attributes/' + event.target.id,event.target.checked);
  }

  render() {
    return (
      <div>
        <div className="attribute_table_row">
          <div className="attribute_table_cel">
            
          </div>
          <div className="attribute_table_cel">
            <label>
              <input type="checkbox" id="commandOnlyOnOff" defaultChecked={this.props.attributes.commandOnlyOnOff} onChange={this.updateCheckbox}/>
              <span className=""><i>commandOnlyOnOff</i></span>
            </label>
          </div>
          <div className="attribute_table_cel">
            <span className="attribute_advise">Enable it if Homeware-LAN shouldn't inform Google Home about the state.</span>
          </div>
        </div>
        <div className="attribute_table_row">
          <div className="attribute_table_cel">
          </div>
          <div className="attribute_table_cel">
            <label>
              <input type="checkbox" id="queryOnlyOnOff" defaultChecked={this.props.attributes.queryOnlyOnOff} onChange={this.updateCheckbox}/>
              <span className=""><i>queryOnlyOnOff</i></span>
            </label>
          </div>
          <div className="attribute_table_cel">
            <span className="attribute_advise">Enable it if Google shouldn't change the device state.</span>
          </div>
        </div>
      </div>
    );
  }
}

export default OnOff