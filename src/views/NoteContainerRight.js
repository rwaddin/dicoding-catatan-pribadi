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
				},{
					id: 2,
					title: "Bebe",
					body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
					archived: true,
					createdAt: '2022-08-17T04:27:34.572Z'
					},
				]
		}
	}

	render() {
		return (
			<div className="col-sm-8 d-flex flex-column gap-4">

				<NoteSearch/>
				<ActiveWrapper {...this.state}/>
				<ArchiveWrapper {...this.state}/>
				{/*{
					this.state.notes.map((n)=>{
						if (n.archived){
							return <ArchiveWrapper key={n.id} {...n}/>
						}else {
							return <ActiveWrapper key={n.id} {...n} />
						}
					})
				}*/}
			</div>
		)
	}
}

export default NoteContainerRight;