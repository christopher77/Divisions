import { PageHeader, Button } from "antd";
import "antd/dist/antd.css";
import { UploadOutlined, DownloadOutlined } from "@ant-design/icons";

function TitlePage() {
	return (
		<div>
			<PageHeader
				style={{
					padding: 0,
					// display: "flex",
					// justifyContent: "space-between",
					// alignItems: "center",
				}}
				ghost={false}
				title="Organización"
				extra={[
					<Button
						key="3"
						type="primary"
						style={{ fontSize: "1.5rem", height: "32px", fontWeight: "400" }}
					>
						+
					</Button>,
					<Button key="2" style={{ color: "#40a9ff" }}>
						<UploadOutlined style={{ fontSize: "1.5rem" }} />
					</Button>,
					<Button key="1" style={{ color: "#40a9ff" }}>
						<DownloadOutlined style={{ fontSize: "1.5rem" }} />
					</Button>,
				]}
			></PageHeader>
		</div>
	);
}

export default TitlePage;
