/*
 * L4R-77 Portafolio
 * Datos de proyectos
 *
 * OPCIONES DE ESTADO:
 * "planning"     — Idea definida, aún no iniciada.
 * "in-progress"  — En construcción o documentación activa.
 * "completed"    — Finalizado y documentado.
 * "paused"       — Iniciado, pero temporalmente pausado.
 *
 * OPCIONES DE CATEGORÍA:
 * "blue-team"    — Proyectos de seguridad defensiva.
 * "linux"        — Administración y seguridad de Linux.
 * "windows"      — Administración y seguridad de Windows.
 * "networking"   — Análisis y seguridad de redes.
 * "automation"   — Scripts, herramientas y automatización.
 * "forensics"    — Proyectos de informática forense.
 * "lab"          — Entornos de laboratorio y documentación.
 *
 * Reemplaza los marcadores únicamente cuando exista
 * información real del proyecto. Nunca inventes datos.
 */

const projects = [

    /* =====================================================
       PROYECTOS DE BLUE TEAM
    ===================================================== */

    {
        name: "Laboratorio de Blue Team en Casa",

        category: "blue-team",

        description:
            "Laboratorio de seguridad defensiva enfocado en monitoreo, " +
            "detección, análisis de registros y flujos de investigación. " +
            "Diseñado como un entorno reproducible para practicar " +
            "habilidades de Blue Team.",

        technologies: [
            "Linux",
            "Windows",
            "Wazuh",
            "Sysmon",
            "Detección"
        ],

        status: "planning",

        repository: "[CREAR REPOSITORIO]",

        documentation: "[AGREGAR DOCUMENTACIÓN]"
    },


    {
        name: "Colección de Reglas de Detección",

        category: "blue-team",

        description:
            "Colección de reglas de detección, firmas Sigma " +
            "y configuraciones de alertas para técnicas de ataque comunes. " +
            "Enfocada en contenido de detección práctico y comprobable.",

        technologies: [
            "Sigma",
            "Detección",
            "SIEM",
            "Análisis de Registros"
        ],

        status: "planning",

        repository: "[CREAR REPOSITORIO]",

        documentation: "[AGREGAR DOCUMENTACIÓN]"
    },


    /* =====================================================
       PROYECTOS DE LINUX
    ===================================================== */

    {
        name: "Laboratorio de Hardening de Linux",

        category: "linux",

        description:
            "Laboratorio enfocado en la configuración de seguridad de Linux, " +
            "fortalecimiento del sistema, configuración de auditd y " +
            "documentación de líneas base de seguridad.",

        technologies: [
            "Linux",
            "Hardening",
            "Auditd",
            "Automatización"
        ],

        status: "planning",

        repository: "[CREAR REPOSITORIO]",

        documentation: "[AGREGAR DOCUMENTACIÓN]"
    },


    {
        name: "Kit de Herramientas de Administración de Linux",

        category: "linux",

        description:
            "Colección de scripts y herramientas Bash para la " +
            "administración de sistemas Linux, auditorías de seguridad " +
            "y automatización de tareas rutinarias.",

        technologies: [
            "Linux",
            "Bash",
            "Automatización",
            "Administración"
        ],

        status: "planning",

        repository: "[CREAR REPOSITORIO]",

        documentation: "[AGREGAR DOCUMENTACIÓN]"
    },


    /* =====================================================
       PROYECTOS DE REDES
    ===================================================== */

    {
        name: "Laboratorio de Seguridad de Redes",

        category: "networking",

        description:
            "Laboratorio autorizado para análisis de redes, inspección " +
            "de tráfico, análisis de protocolos y experimentación " +
            "en seguridad de redes utilizando entornos aislados.",

        technologies: [
            "Redes",
            "TCP/IP",
            "Wireshark",
            "Análisis"
        ],

        status: "planning",

        repository: "[CREAR REPOSITORIO]",

        documentation: "[AGREGAR DOCUMENTACIÓN]"
    },


    /* =====================================================
       PROYECTOS DE AUTOMATIZACIÓN
    ===================================================== */

    {
        name: "Kit de Automatización de Seguridad",

        category: "automation",

        description:
            "Utilidades de automatización defensiva para administración " +
            "de seguridad, análisis de registros, generación de alertas " +
            "y flujos de trabajo rutinarios de seguridad.",

        technologies: [
            "Python",
            "Bash",
            "Automatización",
            "Seguridad"
        ],

        status: "planning",

        repository: "[CREAR REPOSITORIO]",

        documentation: "[AGREGAR DOCUMENTACIÓN]"
    },


    /* =====================================================
       PROYECTOS DE INFORMÁTICA FORENSE
    ===================================================== */

    {
        name: "Laboratorio de Práctica de Informática Forense",

        category: "forensics",

        description:
            "Entorno y documentación para practicar técnicas de " +
            "informática forense, incluyendo análisis de discos, " +
            "análisis de memoria y creación de líneas de tiempo.",

        technologies: [
            "Informática Forense",
            "Linux",
            "Análisis",
            "Documentación"
        ],

        status: "planning",

        repository: "[CREAR REPOSITORIO]",

        documentation: "[AGREGAR DOCUMENTACIÓN]"
    },


    /* =====================================================
       PROYECTOS DE CTF / WRITEUPS
    ===================================================== */

    {
        name: "Writeups de Máquinas HTB",

        category: "lab",

        description:
            "Writeups enfocados en metodología para máquinas retiradas " +
            "de Hack The Box. Incluye reconocimiento, enumeración, " +
            "explotación y técnicas de escalada de privilegios.",

        technologies: [
            "HTB",
            "Linux",
            "Windows",
            "Pentesting"
        ],

        status: "in-progress",

        repository: "ctf-writeups/hackthebox/",

        documentation: "ctf-writeups/README.md"
    },


    {
        name: "HTB: Blue (EternalBlue)",

        category: "lab",

        description:
            "Writeup de la máquina Blue de Hack The Box. " +
            "Explotación de EternalBlue (MS17-010) en Windows " +
            "para obtener acceso SYSTEM directamente.",

        technologies: [
            "Windows",
            "EternalBlue",
            "SMB",
            "Metasploit"
        ],

        status: "completed",

        repository: "ctf-writeups/hackthebox/machines/blue/",

        documentation: "ctf-writeups/hackthebox/machines/blue/README.md"
    },


    {
        name: "Walkthroughs de Salas TryHackMe",

        category: "lab",

        description:
            "Walkthroughs educativos para salas de TryHackMe. " +
            "Metodología paso a paso con herramientas, comandos " +
            "y lecciones aprendidas.",

        technologies: [
            "TryHackMe",
            "CTF",
            "Aprendizaje",
            "Documentación"
        ],

        status: "in-progress",

        repository: "ctf-writeups/tryhackme/",

        documentation: "ctf-writeups/README.md"
    }

];