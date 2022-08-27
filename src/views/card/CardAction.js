import React from "react";

function CardAction({id, archived}) {
	return (
		<div className="card-footer rounded-0 d-flex justify-content-between">
			<button className="btn-danger btn btn-sm"><span className="ti ti-trash"></span> Delete</button>
			{btnMove(archived, id)}
		</div>
	)
}

function btnMove(archived, id) {
	if (archived){
		return <button className="btn-success btn btn-sm"><span className="ti ti-archive"></span> Restore </button>
	}
	return <button className="btn-warning btn btn-sm"><span className="ti ti-archive"></span> Archive </button>

}

export default CardAction;