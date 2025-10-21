
import { QuizQuestion } from '../types';

export const quizData: QuizQuestion[] = [
    {
        question: "What architectural style is Rev-Trac, allowing it to integrate deeply with the SAP core?",
        options: [
            "A separate Java VM",
            "An ABAP \"Bolt-on\" tool",
            "A cloud-native SaaS platform",
            "A browser extension"
        ],
        answer: "An ABAP \"Bolt-on\" tool"
    },
    {
        question: "What are the \"Four Pillars\" of Rev-Trac Platinum?",
        options: [
            "Read, Write, Update, Delete",
            "Development, Quality, Testing, Production",
            "Automation, Acceleration, Compliance, and Stability & Security",
            "ABAP Core, WebCore, RFC, and REST APIs"
        ],
        answer: "Automation, Acceleration, Compliance, and Stability & Security"
    },
    {
        question: "What is the primary purpose of the Overtake and Overwrite Protection System (OOPS)?",
        options: [
            "To prevent unauthorized user access",
            "To prevent out-of-sequence transport migrations",
            "To optimize ABAP code performance",
            "To manage firewall configurations"
        ],
        answer: "To prevent out-of-sequence transport migrations"
    },
    {
        question: "Which component enables Rev-Trac to integrate with tools like Jira and ServiceNow?",
        options: [
            "The ABAP Core",
            "The Rev-Trac Console (/RSC/RT01)",
            "The WebCore Integration Hub",
            "The OOPS mechanism"
        ],
        answer: "The WebCore Integration Hub"
    },
    {
        question: "What is the primary function of the Release Management Workbench (RMW)?",
        options: [
            "To write ABAP code and documentation",
            "To group multiple Rev-Trac Requests (RTRs) for mass deployment",
            "To manage user roles and Segregation of Duties (SOD)",
            "To run system performance health checks"
        ],
        answer: "To group multiple Rev-Trac Requests (RTRs) for mass deployment"
    },
    {
        question: "How does Rev-Trac enforce governance when a developer creates a new transport in SAP?",
        options: [
            "It sends an email to their manager for approval.",
            "It shows an \"enforcement popup\" (BAdI) forcing them to link the transport to an RTR.",
            "It locks the developer's account for 24 hours.",
            "It relies on the developer to manually update a spreadsheet."
        ],
        answer: "It shows an \"enforcement popup\" (BAdI) forcing them to link the transport to an RTR."
    }
];
