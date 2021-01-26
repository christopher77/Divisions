import { PageHeader, Button } from "antd";
import "antd/dist/antd.css";

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
					<Button key="2">up</Button>,
					<Button key="1">down</Button>,
				]}
			></PageHeader>
		</div>
	);
}

export default TitlePage;
