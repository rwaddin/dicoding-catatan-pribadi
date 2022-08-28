import React from "react";

function noteHeader() {
	return (
		<nav className="navbar navbar-expand-sm bg-light rounded-2 border border-dark mb-3 ">
			<div className="container-fluid justify-content-between">
				<span className="navbar-text text-dark">Note's App</span>

				<ul className="navbar-nav d-flex flex-row">
					<li className="nav-item">
						<a className="nav-link" href="https://addin.my.id" target="_blank"><i className="ti ti-world"></i></a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#"><i className="ti ti-mail"></i></a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#"><i className="ti ti-brand-github"></i></a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#"><i className="ti ti-brand-linkedin"></i></a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">2022</a>
					</li>
				</ul>
			</div>

		</nav>
	)
	/*<div className="d-flex w-100 justify-content-center mb-3 rounded-2 border border-dark bg-white">
		<h1>&mdash; Note's App &mdash;</h1>
		<ul className="socmed">
				<li>x</li>
				<li>x</li>
				<li>x</li>
				<li>x</li>
		</ul>
</div>*/
}

export default noteHeader;