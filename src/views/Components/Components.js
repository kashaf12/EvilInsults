/** @format */

import React, { useEffect, useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import bg from "../../assets/img/bg2.jpg";
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Parallax from "../../components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import styles from "../../assets/jss/material-kit-react/views/components";
import "../../App.css";
import Quotes from "../../components/Quotes/Quotes";
import chroma from "chroma-js";
function padZero(str, len) {
	len = len || 2;
	var zeros = new Array(len).join("0");
	return (zeros + str).slice(-len);
}
function invertColor(hex, bw) {
	if (hex.indexOf("#") === 0) {
		hex = hex.slice(1);
	}
	// convert 3-digit hex to 6-digits.
	if (hex.length === 3) {
		hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
	}
	if (hex.length !== 6) {
		throw new Error("Invalid HEX color.");
	}
	var r = parseInt(hex.slice(0, 2), 16),
		g = parseInt(hex.slice(2, 4), 16),
		b = parseInt(hex.slice(4, 6), 16);
	if (bw) {
		// http://stackoverflow.com/a/3943023/112731
		return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? "#000000" : "#FFFFFF";
	}
	// invert color components
	r = (255 - r).toString(16);
	g = (255 - g).toString(16);
	b = (255 - b).toString(16);
	// pad each with zeros and return
	return "#" + padZero(r) + padZero(g) + padZero(b);
}
const useStyles = makeStyles(styles);
export default function Components(props) {
	const [comb, setComb] = useState(["#000000", "#ffffff"]);
	const classes = useStyles();
	const { ...rest } = props;
	useEffect(() => {
		const newColor = chroma.random().hex();
		const invertColo = invertColor(newColor);
		setComb([newColor, invertColo]);
	}, []);
	return (
		<div>
			<Header
				brand='Evil Insults'
				rightLinks={<HeaderLinks newColor={comb[1]} />}
				fixed
				newColor={comb[1]}
				color={"transparent"}
				changeColorOnScroll={{
					height: 400,
					color: "white",
				}}
				{...rest}
			/>
			<Parallax
				image={bg}
				style={{
					background: comb[0],
				}}>
				<div className={classes.container}>
					<GridContainer>
						<GridItem>
							<div className={classes.brand}>
								<Quotes color={comb[1]} />
							</div>
						</GridItem>
					</GridContainer>
				</div>
			</Parallax>

			{/* <div className={classNames(classes.main, classes.mainRaised)}>
				<SectionTabs />
			</div> */}
			<Footer />
		</div>
	);
}
