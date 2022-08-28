import React from "react";

import NoteHeader from "./NoteHeader";
import NoteCreateWrapper from "./NoteCreateWrapper";
import NoteContainerRight from "./NoteContainerRight";

class NoteContainer extends React.Component{
  constructor(props) {
    super(props);
    this.myRef = React.createRef();

    this.state = {
      title: "",
      text: "",
      sisa: {
        kuota:50,
        length: 0
      }
    }

    this.onChangeTitle = this.onChangeTitle.bind(this)
    this.onChangeText = this.onChangeText.bind(this)
  }

  onChangeTitle(e){
    let l = e.target.value.length;
    if (l > this.state.sisa.kuota){
      window.alert("Limit reached");
    }else{
      this.setState(()=>{
        return {
          title: e.target.value,
          sisa:{
            kuota: this.state.sisa.kuota,
            length: l
          }
        }
      })
    }
  }

  onChangeText(e){
    this.setState(()=>{
      return {
        text: e.target.value
      }
    })
  }

  render() {
    return (
      <div className="container pt-3">
        <NoteHeader/>
        <div className="row">
          <div className="col-sm-4 create-wrapper d-flex flex-column">
            <NoteCreateWrapper {...this.state} onChangeTitle={this.onChangeTitle} onChangeText={this.onChangeText} onSave={() => this.myRef.current.onSave()} />
          </div>
          <NoteContainerRight ref={this.myRef} {...this.state}/>
        </div>
      </div>
    )
  }
}

export default NoteContainer;