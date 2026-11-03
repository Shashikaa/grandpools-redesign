# Complete folder and download repair

The previous saved ZIP was truncated: 42,847,143 bytes remained from an archive
originally created at 73,313,317 bytes. It lacked the ZIP central directory and
could not be fully extracted. This explains missing files from that download.

This release rebuilds the full project from the working source. It includes every
active route, all five projects, the full homepage React section set, shared UI,
stylesheets, JavaScript motion bundles, images, videos, fonts and configuration.
Only dependencies, build caches, obsolete code and temporary QA files are omitted.

The HTML-to-React migration is retained, with the requested scroll fixes added in
this release. See RELEASE_NOTES.md, HOMEPAGE_GUIDE.md and MIGRATION_VALIDATION.md.

Extract into a new empty folder. Do not merge an incomplete extraction with this
release. Run npm ci, then npm run dev. For production run npm run build and
npm start. The project lockfile is included; node_modules is installed by npm ci.

PROJECT_FILES.sha256 lists every release file except itself. It records a SHA-256
checksum and relative path for each file. The final ZIP is also checked for all
entry CRCs and compared with this source file list after extraction.
