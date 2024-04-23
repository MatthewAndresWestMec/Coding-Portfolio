import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls='panel1d-content' id='panel1d-header'>
          <Typography>West-Mec Experience</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            During my time at West-MEC coding, I acquired a comprehensive skill
            set in web development technologies. I learned HTML, CSS,
            JavaScript, SCSS (Sass), TypeScript, MongoDB, Node.js, and JWT (JSON
            Web Tokens). Through my participation in Future Business Leaders of
            America (FBLA), I gained practical experience and developed my
            abilities in applying these technologies to real-world projects
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls='panel2d-content' id='panel2d-header'>
          <Typography>Intership Experience</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            During my internship with United Way of Northern Arizona, I
            collaborated with a team of four individuals to develop a mental
            health wellness app. This project involved leveraging my skills in
            web development, including React, SCSS, and Node.js depending on the
            project's requirements. Our goal was to create a user-friendly and
            effective app that could provide resources and support for mental
            health wellness. Through this experience, I gained practical insight
            into project management, teamwork, and the application of technology
            to address important societal needs related to mental health.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls='panel3d-content' id='panel3d-header'>
          <Typography>College Experience</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            I am currently studying bioscience at Arizona State University with
            the goal of pursuing post-graduate studies in pharmacy, dentistry,
            or optometry. My academic focus reflects a deep interest in
            healthcare and a desire to contribute to specialized fields within
            the medical profession. I am dedicated to building a strong
            foundation in bioscience during my undergraduate studies to prepare
            for advanced education and a career focused on improving healthcare
            outcomes.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls='panel4d-content' id='panel4d-header'>
          <Typography>Volunteer Experience</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            In addition to my academic pursuits, I have actively engaged in
            volunteering experiences that align with my passion for
            environmental stewardship and education. One of my roles involved
            planting cacti across Arizona in areas affected by wildfires,
            contributing to ecosystem restoration and biodiversity conservation.
            Additionally, I volunteered to organize classrooms at an elementary
            school, supporting educators in creating an optimal learning
            environment for young students.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
