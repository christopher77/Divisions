import React from "react";
import {
	ShoppingOutlined,
	BellOutlined,
	QuestionCircleOutlined,
} from "@ant-design/icons";

function Header() {
	return (
		<div
			style={{
				backgroundImage: "linear-gradient(to right,#2E52F8, #56A7F2)",
				fontSize: "1.4rem",
				height: "4rem",
				margin: -20,
				marginBottom: 20,
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
			}}
		>
			<div style={{ display: "flex", margin: 10 }}>
				<div>
					<img></img>
				</div>
				<div>Dashboard</div>
				<div>Organizacion</div>
				<div>Modelos</div>
				<div>Seguimiento</div>
			</div>
			<nav
				style={{
					display: "flex",
				}}
			>
				<div>
					<ShoppingOutlined />
				</div>
				<div>
					<QuestionCircleOutlined />
				</div>
				<div>
					<BellOutlined />
				</div>
				<div>Administrador</div>
			</nav>
		</div>
	);
}

export default Header;
