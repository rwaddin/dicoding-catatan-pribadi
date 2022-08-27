import React from "react";

function NoteEmpty() {
	return (
		<div className="col-sm-12">
			<div className="card text-center">
				<div className="card-body">
					<i className="ti ti-notes-off"></i>
					<p className="mb-0">Note not available</p>
				</div>
			</div>
		</div>
	)
}

export default NoteEmpty;