/** @format */
import "./App.css";
import { useEffect, useState } from "react";
import chroma from "chroma-js";

function App() {
	const [data, setData] = useState(null);
	const [color, setColor] = useState(["#33ccff", "#ff99cc"]);
	useEffect(() => {
		fetch("https://evilinsult.com/generate_insult.php?lang=en&type=json", {
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Headers": "*",
				"Access-Control-Allow-Methods": "POST, PUT, DELETE, GET, OPTIONS",
				"Access-Control-Request-Method": "*",
			},
			mode: "cors",
		})
			.then((res) => res.json())
			.then((res) => {
				setData(res.insult);
			});
		console.log();
		setColor([chroma.random(), chroma.random()]);
	}, []);

	return (
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
	);
}

export default App;
