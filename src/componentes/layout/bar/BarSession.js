import React, { Component } from 'react'
import { Button, Toolbar, Typography, IconButton} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex"
      }
    },
    sectionMobile: {
        display: "flex",
        [theme.breakpoints.up("md")]: {
          display: "none"
        }
      },
    grow: {
        flexGrow: 1
      }
});



class BarSession extends Component {
    render() {

        const { classes } = this.props;
        return (
            <div>

                <Toolbar>
                <IconButton color="inherit" >
            <i className="material-icons">menu</i>
          </IconButton>
                    <Typography variant="h6">
                        JOHN MEJIA
                    </Typography>
                    <div className={classes.grow}></div>
                    <div className={classes.sectionDesktop}>
                        <Button color="inherit"> Login </Button>
                    </div>
                    <div className={classes.sectionMobile}></div>
                    <IconButton color="inherit">
                    <i className="material-icons">more_vert</i>
                    </IconButton>
                </Toolbar>
                
            </div>
        )
    }
}

export default withStyles(styles) (BarSession)
