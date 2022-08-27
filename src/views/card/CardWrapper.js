import React from "react";
import CardAction from "./CardAction";
import CardTitle from "./CardTitle";
import CardTime from "./CardTime";
import CardText from "./CardText";

function CardWrapper({id, createdAt, title, body, archived}) {
	return (
		<div className="card my-2">
			<div className="card-body">
				<CardTitle title={title}/>
				<CardTime createdAt={createdAt}/>
				<CardText body={body}/>
			</div>
			<CardAction id={id} archived={archived}/>
		</div>
	)
}

export default CardWrapper;