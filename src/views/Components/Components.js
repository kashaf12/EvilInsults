/** @format */

import React from "react";
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
import SectionTabs from "./Sections/SectionTabs";
import "../../App.css";
const useStyles = makeStyles(styles);
export default function Components(props) {
	const classes = useStyles();
	const { ...rest } = props;
	return (
		<div>
			<Header
				brand='Evil Insults'
				rightLinks={<HeaderLinks />}
				fixed
				color='transparent'
				changeColorOnScroll={{
					height: 400,
					color: "white",
				}}
				{...rest}
			/>
			<Parallax image={bg}>
				<div className={classes.container}>
					<GridContainer>
						<GridItem>
							<div className={classes.brand}>
								<blockquote>
									<p className={classes.title}>
										<strong>If this is coffee,</strong> please bring me some
										tea; <strong>but if this is tea,</strong> please bring me
										some coffee.
									</p>
									<h3 className={classes.subtitle}>
										<cite>Abraham Lincoln</cite>
									</h3>
								</blockquote>
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
