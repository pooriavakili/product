import React, {useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {Typography} from "@material-ui/core";
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Box from '@material-ui/core/Box'
import Drawer from './Drawer'
import {ContextShop} from "../stateManagment/Context";
const makeStyle=makeStyles(theme=>({
    root:{
        flexGrow:1,
    },
    menuButton:{
        marginRight:theme.spacing(2)
    },
    title:{
        flexGrow: 1
    }
}))
export default function Header(props) {
    useContext(ContextShop);
const classes=makeStyle()
    const Style={
    backgroundColor:"#000",

    }
    return (
        <div className={classes.root}>
        <AppBar position='static'
                style={Style}
        >

            <Toolbar>
                <Typography variant='h6' className={classes.title}>
                    Online Shop
                </Typography>

                <Box display={{
                    xs:"none",
                    sm:"block"
                }}>
                <Tabs>
                    <Tab href='/' label='home'>

                    </Tab>
                    <Tab href='/signin' label='signin'>

                    </Tab>
                    <Tab href='/register' label='register'>
                    </Tab>
                    <Tab href='/search' label='search'>
                    </Tab>
                </Tabs>
                </Box>
                <Box display={{
                    xs:"block",
                    sm:"none"
                }}>
                    <Drawer/>
                </Box>
            </Toolbar>
        </AppBar>

        </div>
    );
}


