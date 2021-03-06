/**
 * /*eslint-disable
 *
 * @format
 */

import React from "react";
// react components for routing our app without refresh

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "../CustomDropdown/CustomDropdown";
import Button from "../CustomButtons/Button";
import styles from "../../assets/jss/material-kit-react/components/headerLinksStyle";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
	const classes = useStyles();
	return (
		<List className={classes.list}>
			<ListItem className={classes.listItem}>
				<Tooltip
					id='instagram-twitter'
					title='Follow us on twitter'
					placement={window.innerWidth > 959 ? "top" : "left"}
					classes={{ tooltip: classes.tooltip }}>
					<Button
						href='https://twitter.com/kashafaahmed'
						target='_blank'
						color='transparent'
						className={classes.navLink}>
						<i
							className={classes.socialIcons + " fab fa-twitter"}
							style={{
								color: props.newColor,
							}}
						/>
					</Button>
				</Tooltip>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Tooltip
					id='instagram-facebook'
					title='Follow us on facebook'
					placement={window.innerWidth > 959 ? "top" : "left"}
					classes={{ tooltip: classes.tooltip }}>
					<Button
						color='transparent'
						href='https://www.facebook.com/Kashafaahmed/'
						target='_blank'
						className={classes.navLink}>
						<i
							className={classes.socialIcons + " fab fa-facebook"}
							style={{
								color: props.newColor,
							}}
						/>
					</Button>
				</Tooltip>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Tooltip
					id='instagram-tooltip'
					title='Follow us on instagram'
					placement={window.innerWidth > 959 ? "top" : "left"}
					classes={{ tooltip: classes.tooltip }}>
					<Button
						color='transparent'
						href='https://www.instagram.com/_kashaf_ahmed_/'
						target='_blank'
						style={{
							color: props.newColor,
						}}
						className={classes.navLink}>
						<i
							className={classes.socialIcons + " fab fa-instagram"}
							style={{
								color: props.newColor,
							}}
						/>
					</Button>
				</Tooltip>
			</ListItem>
		</List>
	);
}
