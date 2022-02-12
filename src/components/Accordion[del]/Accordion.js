import React from 'react';
import style from "./Accordion.module.scss";
import {Accordion as MUIAccordion,AccordionSummary,Typography,AccordionDetails} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Accordion = (props) => {
    return (
        <MUIAccordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            // aria-controls="panel1a-content"
            // id="panel1a-header"
            >
            <Typography className={style.heading}>{props.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography className={style.description}>
                {props.description}
            </Typography>

            </AccordionDetails>
        </MUIAccordion>
    );
}
export default Accordion;