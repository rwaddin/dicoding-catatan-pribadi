import React from "react";
import NoteSearch from "./NoteSearch";
import ActiveWrapper from "./ActiveWrapper";
import ArchiveWrapper from "./ArchiveWrapper";

class NoteContainerRight extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
			notes : [],
			temp:  [],
		}

		this.onSearch = this.onSearch.bind(this)
		this.onRemove = this.onRemove.bind(this)
		this.onMove = this.onMove.bind(this)
	}

	onCreate(){
		this.setState((previousState) => {
			return {
				count: previousState.count + 1
			};
		});
	}

	onSearch(e){
		let k = e.target.value;
		this.setState((previousState) => {
			if (k !== ""){
				return {
					notes: previousState.temp.filter((e)=>e.title.includes(k)),
				};
			}else{
				return {
					notes: previousState.temp
				}
			}
		});
	}

	onMove(id){
		let e = this.state.temp;
		let f = e.findIndex(b => b.id === id);
		e[f].archived = !e[f].archived

		this.sync(e);
	}

	onRemove(id){
		let x = window.confirm("Are you sure ?");
		if (x){
			const nt = this.state.temp.filter(n => n.id !== id);
			this.sync(nt)
		}
	}

	onSave(){
		if (this.props.title===""){
			window.alert("Title note is required");
			return;
		}
		if (this.props.text===""){
			window.alert("Body note is required");
			return;
		}

		let n = {
			id: +new Date(),
			title: this.props.title,
			body: this.props.text,
			archived: false,
			createdAt: new Date().toISOString()
		};

		let a = this.state.temp;
		a.push(n)
		this.sync(a);

	}

	sync(e){
		this.setState({
			notes: e,
			temp: e
		});
	}

	render() {
		return (
			<div className="col-sm-8 d-flex flex-column gap-4">
				<NoteSearch search={this.onSearch}/>
				<ActiveWrapper {...this.state} onRemove={this.onRemove} onMove={this.onMove}/>
				<ArchiveWrapper {...this.state} onRemove={this.onRemove} onMove={this.onMove}/>
			</div>
		)
	}
}

export default NoteContainerRight;