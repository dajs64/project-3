import React from "react"
import { Link } from "react-router-dom"

function Nav (props) {
	return (
		<div className="Nav">
			<Link to="/">
				<div>PlayersDetail</div>
			</Link>
			<Link to="/Playerslist">
				<div>Playerslist</div>
			</Link>
		</div>
	)
}

export default Nav