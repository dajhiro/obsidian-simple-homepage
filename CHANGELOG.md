# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.1] - 2026-07-23

### Changed

- Updated the plugin description to "A homepage plugin that behaves just like a web browser."

## [0.1.0] - 2026-07-23

### Added

- Ribbon icon to open the homepage.
  - `Click` opens in the current tab, `Shift-Click` in a new window, `Ctrl-Click` in a new tab, and `Alt-Click` in a split.
- Branching in `openHomepage` so the homepage can be opened in the current tab, a new tab, a split, or a new window.

### Changed

- Renamed the `path` and `onStartup` settings fields to `homepagePath` and `openOnStartup`, and updated their descriptions in the settings tab.

## [0.0.1] - 2026-07-14

### Added

- Command to open the homepage.
- Option to automatically open the homepage on startup when the workspace is empty.
- File suggestion in the homepage path setting.
