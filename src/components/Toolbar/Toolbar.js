import React from 'react';

import Modal from './modal/Modal';


import './Toolbar.css';



class Toolbar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      modalOpen: false
    }
  }

  modalToggleClickHandler = () => {

    this.setState((prevState) => {
      return {modalOpen: !prevState.modalOpen};
    })
    console.log(this.state) 
  };
  
  render(){
 
    return(
      <header className="toolbar">
      <nav className="toolbar_navigation">
  
        <div className="toolbar_logo"><a href="/"><b>SEE</b> THE GOOD</a></div>
        <div className="spacer"></div>
        <div className="toolbar_navigation-items">
          <ul>
            <li><div className="modal-Button" onClick={this.modalToggleClickHandler}>What Is This?</div></li>
            
          </ul>
        </div>
      </nav>
      <Modal show={this.state.modalOpen} modalClose={this.modalToggleClickHandler}/>
    </header>

    )
  
  }

}

export default Toolbar;