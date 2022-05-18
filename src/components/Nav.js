import React from "react"
import { Link } from "react-router-dom"

function Nav (props) {
	return (
		<div className="nav">
			<Link to="/">
				<button>Next Page</button>
			</Link>
			<h1>Welcome</h1>
			<Link to="/Playerslist">
				<button>Players List</button>
			</Link>
		</div>
	)
}

export default Nav