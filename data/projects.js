/*
 * L4R-77 Portfolio
 * Project data
 *
 * STATUS OPTIONS:
 *   "planning"     — Idea defined, not yet started.
 *   "in-progress"  — Actively building or documenting.
 *   "completed"    — Finished and documented.
 *   "paused"       — Started but temporarily on hold.
 *
 * CATEGORY OPTIONS:
 *   "blue-team"    — Defensive security projects.
 *   "linux"        — Linux administration and security.
 *   "windows"      — Windows administration and security.
 *   "networking"   — Network analysis and security.
 *   "automation"   — Scripts, tools, and automation.
 *   "forensics"    — Digital forensics projects.
 *   "lab"          — Lab environments and documentation.
 *
 * Replace placeholders only when real project
 * information exists. Never invent data.
 */

const projects = [

    /* =====================================================
       BLUE TEAM PROJECTS
    ===================================================== */

    {
        name: "Blue Team Home Lab",

        category: "blue-team",

        description:
            "Defensive security laboratory focused on monitoring, " +
            "detection, log analysis and investigation workflows. " +
            "Designed as a reproducible environment for hands-on " +
            "Blue Team practice.",

        technologies: [
            "Linux",
            "Windows",
            "Wazuh",
            "Sysmon",
            "Detection"
        ],

        status: "planning",

        repository: "[CREATE REPOSITORY]",

        documentation: "[ADD DOCUMENTATION]"
    },


    {
        name: "Detection Rules Collection",

        category: "blue-team",

        description:
            "Collection of detection rules, Sigma signatures, " +
            "and alert configurations for common attack techniques. " +
            "Focused on practical, testable detection content.",

        technologies: [
            "Sigma",
            "Detection",
            "SIEM",
            "Log Analysis"
        ],

        status: "planning",

        repository: "[CREATE REPOSITORY]",

        documentation: "[ADD DOCUMENTATION]"
    },


    /* =====================================================
       LINUX PROJECTS
    ===================================================== */

    {
        name: "Linux Hardening Lab",

        category: "linux",

        description:
            "Laboratory focused on Linux security configuration, " +
            "system hardening, auditd configuration, and security " +
            "baseline documentation.",

        technologies: [
            "Linux",
            "Hardening",
            "Auditd",
            "Automation"
        ],

        status: "planning",

        repository: "[CREATE REPOSITORY]",

        documentation: "[ADD DOCUMENTATION]"
    },


    {
        name: "Linux Administration Toolkit",

        category: "linux",

        description:
            "Collection of Bash scripts and tools for Linux " +
            "system administration, security auditing, and " +
            "automation of routine tasks.",

        technologies: [
            "Linux",
            "Bash",
            "Automation",
            "Administration"
        ],

        status: "planning",

        repository: "[CREATE REPOSITORY]",

        documentation: "[ADD DOCUMENTATION]"
    },


    /* =====================================================
       NETWORKING PROJECTS
    ===================================================== */

    {
        name: "Network Security Lab",

        category: "networking",

        description:
            "Authorized laboratory for network analysis, traffic " +
            "inspection, protocol analysis and network security " +
            "experimentation using isolated environments.",

        technologies: [
            "Networking",
            "TCP/IP",
            "Wireshark",
            "Analysis"
        ],

        status: "planning",

        repository: "[CREATE REPOSITORY]",

        documentation: "[ADD DOCUMENTATION]"
    },


    /* =====================================================
       AUTOMATION PROJECTS
    ===================================================== */

    {
        name: "Security Automation Toolkit",

        category: "automation",

        description:
            "Defensive automation utilities for security " +
            "administration, log analysis, alerting and " +
            "routine security workflows.",

        technologies: [
            "Python",
            "Bash",
            "Automation",
            "Security"
        ],

        status: "planning",

        repository: "[CREATE REPOSITORY]",

        documentation: "[ADD DOCUMENTATION]"
    },


    /* =====================================================
       FORENSICS PROJECTS
    ===================================================== */

    {
        name: "Digital Forensics Practice Lab",

        category: "forensics",

        description:
            "Environment and documentation for practicing " +
            "digital forensics techniques including disk " +
            "analysis, memory forensics and timeline creation.",

        technologies: [
            "Forensics",
            "Linux",
            "Analysis",
            "Documentation"
        ],

        status: "planning",

        repository: "[CREATE REPOSITORY]",

        documentation: "[ADD DOCUMENTATION]"
    }

];