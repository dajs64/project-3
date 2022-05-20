import React from "react"
import { Link } from "react-router-dom"

function Nav (props) {
	return (
		<div className="nav">
			{/* <Link to="/">
				<button>Next Page</button>
			</Link> */}
      <div className="heading-wrapper">

			<h1 className="p1">Players</h1>
      </div>
			<Link className="nav-button" to="/Playerslist">
				<button>Back</button>
			</Link>
		</div>
	)
}

export default Nav