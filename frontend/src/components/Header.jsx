import React from "react";
import {
	ShoppingOutlined,
	BellOutlined,
	QuestionCircleOutlined,
} from "@ant-design/icons";
import { Badge } from "antd";

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
			<div style={{ display: "flex", margin: 10, color: "#fff" }}>
				<div>
					<img src="img/mandu_uno.png" alt="logo" />
				</div>
				<div style={{ padding: "0 1rem", cursor: "pointer", height: "100%" }}>
					Dashboard
				</div>
				<div style={{ padding: "0 1rem", cursor: "pointer", height: "100%" }}>
					Organizacion
				</div>
				<div style={{ padding: "0 1rem", cursor: "pointer", height: "100%" }}>
					Modelos
				</div>
				<div style={{ padding: "0 1rem", cursor: "pointer", height: "100%" }}>
					Seguimiento
				</div>
			</div>
			<nav
				style={{
					display: "flex",
					color: "#fff",
				}}
			>
				<div style={{ padding: "0 1rem", cursor: "pointer", height: "100%" }}>
					<ShoppingOutlined />
				</div>
				<div style={{ padding: "0 1rem", cursor: "pointer", height: "100%" }}>
					<QuestionCircleOutlined />
				</div>
				<div style={{ padding: "0 1rem", cursor: "pointer", height: "100%" }}>
					<Badge count={3}>
						<BellOutlined style={{ color: "#fff" }} />
					</Badge>
				</div>
				<div>Administrador</div>
				<div style={{ padding: "0 1rem", cursor: "pointer", height: "100%" }}>
					<img src="img/mandu_uno.png" alt="logo 2"></img>
				</div>
			</nav>
		</div>
	);
}

export default Header;
