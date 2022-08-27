import React from "react";

function CardAction({id, archived, onRemove, onMove}) {
	return (
		<div className="card-footer rounded-0 d-flex justify-content-between">
			<button className="btn-danger btn btn-sm" onClick={()=>onRemove(id)}><span className="ti ti-trash"></span> Delete</button>
			{btnMove(archived, id, onMove)}
		</div>
	)
}

function btnMove(archived, id, onMove) {
	if (archived){
		return <button className="btn-success btn btn-sm" onClick={()=>onMove(id)}><span className="ti ti-archive"></span> Restore </button>
	}
	return <button className="btn-warning btn btn-sm" onClick={()=>onMove(id)}><span className="ti ti-archive"></span> Archive </button>

}

export default CardAction;