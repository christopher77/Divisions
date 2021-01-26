import { Radio } from "antd";
import "antd/dist/antd.css";

function RadioButton() {
	return (
		<Radio.Group style={{ margin: 20 }}>
			<Radio.Button value="listado">Listado</Radio.Button>
			<Radio.Button value="arbol">Arbol</Radio.Button>
		</Radio.Group>
	);
}

export default RadioButton;
