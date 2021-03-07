/** @format */
import React, { useEffect, useState } from "react";
import insult from "../../insult.json";
import styles from "../../assets/jss/material-kit-react/views/components";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles(styles);
function Quotes(props) {
	const classes = useStyles();
	const [data, setData] = useState(null);
	useEffect(() => {
		const ind = Math.floor(Math.random() * insult.length) + 0;
		const insultData = insult[ind];
		setData(insultData);
	}, []);

	return (
		<>
			<div
				style={{
					position: "relative",
					marginTop: "20px",
				}}>
				{!data ? (
					<div class='spin'></div>
				) : (
					<blockquote>
						<p
							className={classes.title}
							style={{
								color: props.color,
							}}>
							{data}
						</p>
						<h3 className={classes.subtitle}>
							<cite>~</cite>
						</h3>
					</blockquote>
				)}
			</div>
		</>
	);
}

export default Quotes;
