import React from "react";

function NoteCreateWrapper() {
	return (
		<div className="card shadow border border-dark">
			<div className="card-body">
				<h2 className="mb-4">Create a note</h2>

				<form action="src/views/create/NoteCreateWrapper">
					<div className="form-floating mb-3">
						<input type="email" className="form-control" placeholder="name@example.com" />
							<label>Title</label>
							<div className="text-end small my-2 text-muted">Sisa karakter : 50</div>
					</div>
					<div className="form-floating mb-3">
						<textarea className="form-control input-note" placeholder="Leave a comment here"></textarea>
						<label>Note</label>
					</div>
					<button className="btn btn-dark w-100">Simpan</button>
				</form>
			</div>
		</div>
	)
}

export default NoteCreateWrapper;