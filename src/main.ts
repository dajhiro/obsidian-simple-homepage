import { Plugin } from 'obsidian';
import { DEFAULT_SETTINGS, SimpleHomepageSettings, SimpleHomepageSettingTab } from './settings';
import { openHomepage, OpenMode } from './homepage';

export const APP_NAME = "Simple Homepage";

export default class SimpleHomepage extends Plugin {
	settings!: SimpleHomepageSettings;

	async onload() {
    await this.loadSettings();
    this.addSettingTab(new SimpleHomepageSettingTab(this.app, this));

    // Ribbon Icon: Open Homepage
    this.addRibbonIcon(
      'home',
      "Open homepage",
      (evt: MouseEvent) => {
        const { shiftKey, ctrlKey, metaKey, altKey } = evt;
        const isCtrl = ctrlKey || metaKey;

        let mode: OpenMode;

        if (isCtrl) {
          mode = 'tab';
        } else if (shiftKey) {
          mode = 'window';
        } else if (altKey) {
          mode = 'split';
        } else {
          mode = 'current';
        }

        void openHomepage(this.app, this.settings.homepagePath, mode);
      }
    );

    // Command: Simple Homepage: Open Homepage
    this.addCommand({
      id: 'open-homepage',
      name: "Open homepage",
      callback: () => openHomepage(this.app, this.settings.homepagePath),
    });

    // on Startup: Open Homepage
    this.app.workspace.onLayoutReady(() => {
      if (!this.settings.openOnStartup) return ;
      if (this.app.workspace.getMostRecentLeaf()?.view.getViewType() !== 'empty') return ;
      void openHomepage(this.app, this.settings.homepagePath);
    });
  }

	async loadSettings() {
		this.settings = Object.assign(
			{},
			DEFAULT_SETTINGS,
			(await this.loadData()) as Partial<SimpleHomepageSettings>,
		);
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}
