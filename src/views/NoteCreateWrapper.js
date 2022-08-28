import React from "react";

function NoteCreateWrapper({title, text, onChangeTitle, onChangeText, sisa, onSave}) {
	return (
		<div className="card shadow border border-dark mb-4">
			<div className="card-body">
				<h2 className="mb-4"><i className="ti ti-pencil"></i> Create a note</h2>

				<form>
					<div className="form-floating mb-3">
						<input type="text" className="form-control" placeholder="name" value={title} onChange={onChangeTitle} />
						<label>Title</label>
						<div className="text-end small my-2 text-muted">Sisa karakter : {sisa.kuota - sisa.length}</div>
					</div>
					<div className="form-floating mb-3">
						<textarea className="form-control input-note" placeholder="Text" onChange={onChangeText} value={text}></textarea>
						<label>Note</label>
					</div>
					<button className="btn btn-dark w-100" onClick={onSave} type={"button"}>Simpan</button>
				</form>
			</div>
		</div>
	)
}

export default NoteCreateWrapper;