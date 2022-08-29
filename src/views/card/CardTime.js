import React from "react";
import {showFormattedDate} from "../../utils";

function CardTime({createdAt}) {
	return (
		<p className="small text-muted">{showFormattedDate(createdAt)}</p>
	)
}

export default CardTime;