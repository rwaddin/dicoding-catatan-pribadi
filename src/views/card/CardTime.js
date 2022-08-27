import React from "react";

function CardTime({createdAt}) {
	return (
		<p className="small text-muted">{convert(createdAt)}</p>
	)
}

function convert(isoString) {
	let x = new Date(isoString);
	let a = x.toLocaleString('id', { month: 'long' });
	let b = x.toLocaleString('id', { weekday: 'long' });
	return `${b}, ${x.getDate()} ${a} ${x.getFullYear()}`;
}

export default CardTime;