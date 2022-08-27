import React from "react";

function NoteSearch(){
	return (
		<div className="d-flex">
			<form action="src/views/NoteSearch" className="w-100">
				<input type="email" className="form-control form-control-lg border border-dark" placeholder="Search note"/>
			</form>
		</div>
	)
}


export default NoteSearch;