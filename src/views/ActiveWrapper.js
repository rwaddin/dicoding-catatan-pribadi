import React from "react";
import CardWrapper from "./card/CardWrapper";
import NoteEmpty from "./NoteEmpty";

function ActiveWrapper(props) {
	return (
		<div className="card shadow border border-dark">
			<div className="card-body">
				<h4 className="mb-3"><i className="ti ti-notes"></i>Active Note's</h4>

				<div className="row">
					{check(props)}
				</div>
			</div>
		</div>
	)
}

function check(c) {
	let a = c.notes.find((d)=> !d.archived);

	if (a){
		return (
			c.notes.map((n)=>{
				if (!n.archived){
					return (
						<div className="col-sm-4" key={n.id} >
							<CardWrapper {...n} onRemove={c.onRemove} onMove={c.onMove}/>
						</div>
					)
				}
			})
		)
	}
	return <NoteEmpty/>;
}

export default ActiveWrapper;