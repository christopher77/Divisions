import { PageHeader, Button } from "antd";
import "antd/dist/antd.css";
import { UploadOutlined, DownloadOutlined } from "@ant-design/icons";

function TitlePage() {
	return (
		<div>
			<PageHeader
				ghost={false}
				title="Organización"
				extra={[
					<Button key="3" type="primary">
						+
					</Button>,
					<Button key="2">
						<UploadOutlined />
					</Button>,
					<Button key="1">
						<DownloadOutlined />
					</Button>,
				]}
			></PageHeader>
		</div>
	);
}

export default TitlePage;
