import React, { component } from 'react';
import './App.css';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import SettingsIcon from '@material-ui/icons/Settings';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import StepConnector from '@material-ui/core/StepConnector';
import CustomizedSteppers from './modules/Steppers';

const smallScreen = window.innerWidth < 768;
const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		minWidth: 675
	},
	menuButton: {
		marginRight: theme.spacing(8),
		marginLeft: theme.spacing(1)
	},

	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)'
	},
	title: {
		fontSize: 14
	},
	pos: {
		marginBottom: 12
	},
	jakub: {
		backgroundColor: '#824936',
		borderRadius: '5px'
	},
	jakub3: {
		border: '5px solid red',
		fontSize: '5em'
	}
}));

export default function App() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar title="Prosím vyberte si termín návštěvy" position="static" className={classes.jakub}>
				<section
				/* style={{
						maxWidth: !smallScreen ? '80%' : '100%',
						margin: 'auto',
						marginTop: !smallScreen ? 20 : 0
					}} */
				>
					{/* 	<Toolbar variant="regular">
						<IconButton edge="center" className={classes.menuButton} color="inherit" aria-label="menu">
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" color="inherit">
							Prosím vyberte si termín
						</Typography>
					</Toolbar> */}
					<Card>
						<CardContent>
							<CustomizedSteppers classes={classes.jakub5} className={classes.menuButton} />
						</CardContent>
					</Card>
				</section>
			</AppBar>
		</div>
	);
}
