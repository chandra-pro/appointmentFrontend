import React, { useState } from "react";
import { Typography, IconButton, Collapse, Paper } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { makeStyles } from "@mui/styles";
import { spacing } from "@mui/system"; // Import spacing

const useStyles = makeStyles({
  faqItem: {
    marginBottom: spacing(2), // Use spacing directly
    padding: spacing(2),
  },
});

const FAQItem = ({ question, answer }) => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Paper className={classes.faqItem} elevation={7} style={{ padding: 20 }}>
      <Typography variant="h6">
        <IconButton onClick={toggleOpen} size="small">
          <ExpandMoreIcon />
        </IconButton>
        {question}
      </Typography>
      <Collapse in={isOpen}>
        <Typography variant="body1">{answer}</Typography>
      </Collapse>
    </Paper>
  );
};

const FAQSection = () => {
  const classes = useStyles();

  const faqData = [
    {
      question: "How can I schedule an appointment with a doctor?",
      answer: "You can schedule an appointment by...",
    },
    {
      question: "What is the consultation fee for a doctor's appointment?",
      answer:
        "Consultation fees vary by doctor. Please check the doctor's profile or contact our clinic for specific pricing information.",
    },
    {
      question: "Do you accept insurance plans?",
      answer:
        "Yes, we accept various insurance plans. Please contact our billing department for details on accepted insurance providers.",
    },
    {
      question: "Can I consult with a doctor remotely or through telemedicine?",
      answer:
        "Yes, some of our doctors offer telemedicine consultations. Learn more about telemedicine options.",
    },
  ];

  return (
    <div>
      <Typography variant="h8">Frequently Asked Questions</Typography>
      {faqData.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default FAQSection;
