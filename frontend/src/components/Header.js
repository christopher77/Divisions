import React from "react";
import {
	ShoppingOutlined,
	BellOutlined,
	QuestionCircleOutlined,
	DownOutlined,
} from "@ant-design/icons";
import { Badge, Avatar } from "antd";

function Header() {
	return (
		<div
			style={{
				backgroundImage: "linear-gradient(to right,#2E52F8, #56A7F2)",
				fontSize: "1.2rem",
				height: "4.5rem",
				margin: -20,
				marginBottom: 20,
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
			}}
		>
			<div style={{ display: "flex", margin: 10, color: "#fff" }}>
				<div>
					<img
						src="img/mandu_uno.png"
						alt="logo"
						style={{ height: "2rem", width: "50px" }}
					/>
				</div>
				<div style={{ padding: "0 1rem", cursor: "pointer", height: "100%" }}>
					Dashboard
				</div>
				<div style={{ padding: "0 1rem", cursor: "pointer", height: "100%" }}>
					Organización
				</div>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						padding: "0 1rem",
						cursor: "pointer",
						height: "100%",
					}}
				>
					Modelos
					<div
						style={{
							padding: "0 .4rem",
							cursor: "pointer",
							height: "50%",
							fontSize: ".9rem",
						}}
					>
						<DownOutlined />
					</div>
				</div>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						padding: "0 1rem",
						cursor: "pointer",
						height: "100%",
					}}
				>
					Seguimiento
					<div
						style={{
							padding: "0 .4rem",
							cursor: "pointer",
							height: "50%",
							fontSize: ".9rem",
						}}
					>
						<DownOutlined />
					</div>
				</div>
			</div>
			<nav
				style={{
					display: "flex",
					color: "#fff",
					alignItems: "center",
				}}
			>
				<div
					style={{
						padding: "0 1rem",
						cursor: "pointer",
						height: "100%",
						fontSize: "1.5rem",
					}}
				>
					<ShoppingOutlined />
				</div>
				<div
					style={{
						padding: "0 1rem",
						cursor: "pointer",
						height: "100%",
						fontSize: "1.5rem",
					}}
				>
					<QuestionCircleOutlined />
				</div>
				<div
					style={{
						padding: "0 1rem",
						cursor: "pointer",
						height: "100%",
						fontSize: "1.5rem",
						position: "relative",
					}}
				>
					{/* <Badge count={3} style={{ fontSize: ".8rem" }}> */}
					<BellOutlined style={{ color: "#fff" }} />
					{/* </Badge> */}
					<span
						style={{
							position: "absolute",
							top: "-2px",
							right: "7px",
							backgroundColor: "red",
							width: "18px",
							height: "18px",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							fontSize: ".8rem",
							borderRadius: "50%",
						}}
					>
						3
					</span>
				</div>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						padding: "0 1rem",
						cursor: "pointer",
						// height: "100%",
					}}
				>
					<Avatar
						style={{
							display: "flex",
							alignItems: "center",
							backgroundColor: "#f56a00",
							marginRight: ".5rem",
							height: "3.5rem",
							width: "3.5rem",
							fontSize: "2rem",
						}}
					>
						A
					</Avatar>
					Administrador
					<div
						style={{
							padding: "0 .4rem",
							cursor: "pointer",
							height: "50%",
							fontSize: ".9rem",
						}}
					>
						<DownOutlined />
					</div>
				</div>
				<div style={{ padding: "0 1rem", cursor: "pointer", height: "100%" }}>
					<img
						src="img/mandu_dos.jpeg"
						alt="logo 2"
						style={{ height: "2rem", width: "50px" }}
					></img>
				</div>
			</nav>
		</div>
	);
}

export default Header;
