import React from "react";
import NoteSearch from "./NoteSearch";
import ActiveWrapper from "./active/ActiveWrapper";
import ArchiveWrapper from "./archive/ArchiveWrapper";

class NoteContainerRight extends React.Component{

	constructor(props) {
		super(props);

		this.state = {
			notes : [
				{
					id: 1,
					title: "Babel",
					body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
					archived: false,
					createdAt: '2022-04-14T04:27:34.572Z'
				},
				{
					id: 2,
					title: "Bebean",
					body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
					archived: true,
					createdAt: '2022-08-17T04:27:34.572Z'
					},
			],
			temp:  [
				{
					id: 1,
					title: "Babel",
					body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
					archived: false,
					createdAt: '2022-04-14T04:27:34.572Z'
				},
				{
					id: 2,
					title: "Bebean",
					body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
					archived: true,
					createdAt: '2022-08-17T04:27:34.572Z'
				},
			],
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