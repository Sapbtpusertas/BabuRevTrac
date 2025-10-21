import React from 'react';
import { Module } from '../types';

// Fix: Replace JSX with React.createElement to be compatible with .ts files.
const ChapterContentWrapper = ({ children }: { children: React.ReactNode }) => (
  React.createElement('div', { className: "text-gray-700 leading-relaxed" }, children)
);

// Fix: Replace JSX with React.createElement to be compatible with .ts files.
const H3 = ({ children }: { children: React.ReactNode }) => React.createElement('h3', { className: "text-xl font-semibold text-blue-700 mt-6 mb-2" }, children);
// Fix: Replace JSX with React.createElement to be compatible with .ts files.
const P = ({ children }: { children: React.ReactNode }) => React.createElement('p', { className: "mb-4" }, children);


export const modulesData: Module[] = [
  {
    id: 'modal-ch1',
    title: 'Chapter 1: Introduction to Rev-Trac Platinum',
    description: 'Beyond Standard SAP TMS: The Case for Automated Change Management, Architectural Overview, and the Four Pillars.',
    // Fix: Replace JSX with React.createElement to be compatible with .ts files.
    content: React.createElement(ChapterContentWrapper, null,
        React.createElement(P, null, "In the intricate and mission-critical world of SAP, managing changes across complex landscapes is a paramount challenge. The stability of production systems, the integrity of business processes, and the adherence to strict compliance mandates all hinge on the ability to control how, when, and why changes are introduced. While the standard SAP Transport Management System (TMS) provides a basic mechanism for moving development objects, it falls short in providing the automation, governance, and visibility required by modern enterprises. This chapter introduces Rev-Trac Platinum, a comprehensive change management automation platform by Revelation Software Concepts (RSC), designed to address these shortcomings and serve as a cornerstone for SAP DevOps and operational excellence."),
        React.createElement(H3, null, "1.1 Beyond Standard SAP TMS: The Case for Automated Change Management"),
        React.createElement(P, null, "The traditional methodology for managing SAP changes relies heavily on the native Transport Management System (TMS) augmented by manual coordination and tracking. In many organizations, this process is governed by spreadsheets, email chains, and frequent status meetings. This approach is not only inefficient but also fraught with risk. As landscapes grow in complexity—with multiple project streams, parallel development for business-as-usual (BAU) support, and geographically dispersed teams—manual tracking becomes unwieldy and error-prone."),
        React.createElement(P, null, "A common and dangerous outcome of this manual process is the deployment of SAP transport requests into production out of sequence, leading to system instability, data inconsistencies, and costly business disruptions. Rev-Trac was conceived to solve these fundamental problems. It is an SAP \"Bolt-on\" tool, meaning it is an ABAP-based application that is installed directly into an SAP system, operating as a native add-on. This architectural choice allows for deep and seamless integration with the SAP core."),
        React.createElement(P, null, "Rev-Trac provides a centralized platform for controlling and automating the entire lifecycle of configuration and development changes, from the initial request in a development environment through quality assurance, user acceptance testing, and final deployment to production. By enforcing a structured, repeatable, and auditable process, it ensures that there are no object conflicts and that all changes are transported in the necessary sequence, thereby safeguarding the production environment."),
        React.createElement(P, null, "The necessity for such a tool stems from the inherent limitations of standard TMS. Native TMS is a transport mechanism, not a change management system. It lacks workflow automation, enforceable approval gates, dependency analysis, and a consolidated audit trail that links a technical transport to a business requirement. Rev-Trac fills this gap by wrapping a layer of intelligent automation and governance around the core transport process, transforming it from a simple logistical function into a managed, strategic capability."),
        React.createElement(H3, null, "1.2 Architectural Overview: The ABAP Core and the WebCore Integration Hub"),
        React.createElement(P, null, "Rev-Trac Platinum's power and flexibility derive from its sophisticated dual architecture, which combines the stability of a native SAP solution with the openness of a modern web-based integration platform. Understanding this hybrid model is fundamental to leveraging the full capabilities of the tool."),
        React.createElement('h4', { className: "text-lg font-semibold text-gray-800 mt-4 mb-2" }, "The ABAP Core"),
        React.createElement(P, null, "The foundation of Rev-Trac is its tightly controlled, SAP-certified ABAP add-on. This core component is installed into a designated SAP system within the landscape, referred to as the \"Rev-Trac Master\" or \"Central Instance\". All change management logic, workflow processing, and core configuration reside within this ABAP engine. Because it runs natively within SAP, the ABAP core can directly interact with system tables, call standard SAP function modules, and leverage the existing SAP user management and security framework. This \"bolt-on\" nature simplifies administration for SAP Basis teams, as the tool is managed using familiar SAP concepts and transactions. However, it also means that the availability of the central change management control point is directly dependent on the uptime of the host SAP system—a critical consideration for planning system maintenance."),
        React.createElement('h4', { className: "text-lg font-semibold text-gray-800 mt-4 mb-2" }, "The WebCore Integration Hub"),
        React.createElement(P, null, "The modern evolution of the platform is the Rev-Trac WebCore, a web-based interface and integration hub that extends the capabilities of the classic ABAP layer. The WebCore is typically deployed on a separate Virtual Machine (VM) and communicates with the ABAP core. Its primary function is to serve as a gateway to the broader enterprise IT ecosystem by exposing a comprehensive set of REST APIs. This enables bi-directional integration with a wide array of third-party Application Lifecycle Management (ALM) and DevOps tools, including Jira, ServiceNow, Azure DevOps, and SAP's own Cloud ALM."),
        React.createElement(P, null, "This dual architecture signifies a strategic evolution for Rev-Trac... This allows workflows to originate and be managed in non-SAP systems (e.g., an incident in ServiceNow can automatically trigger a change process in Rev-Trac), preventing the SAP landscape from becoming an isolated silo with its own disparate processes."),
        React.createElement(H3, null, "1.3 The Four Pillars: Deconstructing Automation, Acceleration, Compliance, and Stability & Security"),
        React.createElement(P, null, "The design philosophy and feature set of Rev-Trac Platinum are structured around four foundational pillars. These pillars represent the core value propositions of the platform and provide a framework for understanding its capabilities."),
        React.createElement('h4', { className: "text-lg font-semibold text-gray-800 mt-4 mb-2" }, "Automation"),
        React.createElement(P, null, "This pillar focuses on eliminating the high-risk, error-prone manual tasks... Rev-Trac automates key processes, including the migration of transports between systems, the routing of change requests for approval, the collection of digital signatures, and the generation of documentation. By replacing manual handoffs with a consistent, repeatable workflow, it significantly reduces the likelihood of human error..."),
        React.createElement('h4', { className: "text-lg font-semibold text-gray-800 mt-4 mb-2" }, "Acceleration"),
        React.createElement(P, null, "In today's business environment, the speed of change is a competitive differentiator. The Acceleration pillar addresses the need for faster and more frequent delivery of SAP changes. Rev-Trac is engineered to support modern development methodologies such as Agile and DevOps, enabling a Continuous Integration/Continuous Deployment (CI/CD) pipeline for SAP."),
        React.createElement('h4', { className: "text-lg font-semibold text-gray-800 mt-4 mb-2" }, "Compliance"),
        React.createElement(P, null, "For many organizations... demonstrating compliance with internal policies and external regulations (such as Sarbanes-Oxley (SOX), GxP, or FDA 21 CFR Part 11) is a non-negotiable requirement. The platform enforces predefined change management processes, ensuring that no step is bypassed. It automatically generates a complete, unalterable audit trail for every change..."),
        React.createElement('h4', { className: "text-lg font-semibold text-gray-800 mt-4 mb-2" }, "Stability & Security"),
        React.createElement(P, null, "The ultimate goal... is to deliver value without disrupting business operations. This pillar encompasses the advanced safety features... Rev-Trac's suite of built-in quality controls, such as the Overtake and Overwrite Protection System (OOPS), advanced object locking for parallel development, and dependency checking, proactively identify and prevent high-risk changes from reaching production."),
      )
  },
  {
    id: 'modal-ch2',
    title: 'Chapter 2: Pre-Implementation Planning and Installation',
    description: 'Landscape Prerequisites, Technical Requirements for the Master and WebCore VM, and the Step-by-Step Installation Process.',
    content: React.createElement(ChapterContentWrapper, null, React.createElement(P, null, "Content for Chapter 2 goes here. This content can be expanded with detailed information about pre-implementation planning and installation steps."))
  },
  {
    id: 'modal-ch3',
    title: 'Chapter 3: Foundational Configuration',
    description: 'Using the Rev-Trac Console, Configuring the Organization Structure (Users, Teams, Roles), and Defining the Landscape.',
    content: React.createElement(ChapterContentWrapper, null, React.createElement(P, null, "Content for Chapter 3 goes here. This section should cover the initial setup and configuration of Rev-Trac, including user management and landscape definition."))
  },
  {
    id: 'modal-ch4',
    title: 'Chapter 4: Mastering the Change Request Lifecycle',
    description: 'Creating a Rev-Trac Request (RTR), Managing Transports and Documentation, and the Digital Signature Approval Process.',
    content: React.createElement(ChapterContentWrapper, null, React.createElement(P, null, "Content for Chapter 4 goes here. Detail the end-to-end process of managing a change request within Rev-Trac, from creation to approval."))
  },
  {
    id: 'modal-ch5',
    title: 'Chapter 5: Advanced Safety and Parallel Development',
    description: 'A deep dive into the Overtake and Overwrite Protection System (OOPS), Object Locking, and Automated Retrofit.',
    content: React.createElement(ChapterContentWrapper, null, React.createElement(P, null, "Content for Chapter 5 goes here. Explain the advanced features that ensure system stability, like OOPS and object locking for parallel development."))
  },
  {
    id: 'modal-ch6',
    title: 'Chapter 6: Orchestrating Releases with the RMW',
    description: 'Using the Release Management Workbench (RMW), Building and Locking a Release, and Executing Mass Deployments.',
    content: React.createElement(ChapterContentWrapper, null, React.createElement(P, null, "Content for Chapter 6 goes here. Focus on the Release Management Workbench and how it facilitates coordinated mass deployments."))
  },
  {
    id: 'modal-ch7',
    title: 'Chapter 7: Integrating Rev-Trac into a DevOps Toolchain',
    description: 'Configuring the WebCore with API Keys and Webhooks. Bi-directional integration with ServiceNow, Jira, and SAP Cloud ALM.',
    content: React.createElement(ChapterContentWrapper, null, React.createElement(P, null, "Content for Chapter 7 goes here. This chapter should detail the integration capabilities of Rev-Trac with other DevOps tools via the WebCore."))
  },
  {
    id: 'modal-ch8',
    title: 'Chapter 8: Auditing, Reporting, and Best Practices',
    description: 'Generating Audit-Ready Reports, Security Best Practices (SOD), Performance Tuning, and Common Troubleshooting.',
    content: React.createElement(ChapterContentWrapper, null, React.createElement(P, null, "Content for Chapter 8 goes here. Cover the reporting features, security considerations, performance optimization, and troubleshooting tips."))
  },
  {
    id: 'modal-quiz',
    title: 'Test Your Knowledge',
    description: 'Take the interactive quiz to review what you\'ve learned from all chapters.',
    isQuiz: true,
    content: null,
  },
];