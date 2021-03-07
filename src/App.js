/** @format */
import "./App.css";
import { useEffect, useState } from "react";
import chroma from "chroma-js";
import insult from "./insult.json";
import Components from "./views/Components/Components.js";
import "./assets/scss/material-kit-react.scss?v=1.9.0";
function App() {
	const [data, setData] = useState(null);
	const [color, setColor] = useState(["#33ccff", "#ff99cc"]);
	useEffect(() => {
		const ind = Math.floor(Math.random() * insult.length) + 0;
		const insultData = insult[ind];
		setData(insultData);
		setColor([chroma.random(), chroma.random()]);
	}, []);

	return (
		<>
			<Components />
			<div
				className='App'
				style={{
					background: `linear-gradient(to bottom,  ${color[0]} 0%,${color[1]} 100%)`,
				}}>
				<h1 className='header mb-2'>Evil Quotes</h1>
				<div
					style={{
						position: "relative",
						marginTop: "20px",
					}}>
					{!data ? (
						<div class='spin'></div>
					) : (
						<div class='blockquote overlay'>
							<p
								style={{
									fontSize: "larger",
								}}>
								{data}
							</p>
						</div>
					)}
				</div>
			</div>
		</>
	);
}

export default App;
