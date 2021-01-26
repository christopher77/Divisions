import { Tabs } from "antd";
import "antd/dist/antd.css";

const { TabPane } = Tabs;

function callback(key) {
	console.log(key);
}

function Tabulator() {
	return (
		<div>
			<Tabs defaultActiveKey="1" onChange={callback}>
				<TabPane tab="Divisiones" key="1"></TabPane>
				<TabPane tab="Colaboradores" key="2"></TabPane>
			</Tabs>
		</div>
	);
}

export default Tabulator;
