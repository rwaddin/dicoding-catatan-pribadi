import React from "react";

function NoteSearch({search}){
	return (
		<div className="d-flex">
			<form action="src/views/NoteSearch" className="w-100">
				<input type="email" onChange={search} className="form-control form-control-lg border border-dark" placeholder="Search note"/>
			</form>
		</div>
	)
}


export default NoteSearch;