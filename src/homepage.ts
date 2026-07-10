import { APP_NAME } from './main';
import { App, Notice } from 'obsidian';

export async function openHomepage(app: App, path: string): Promise<void> {
  const file = app.vault.getFileByPath(path);

  if (!file) {
    new Notice(`${APP_NAME}: File not found.\nPath: ${path}`);
    return ;
  }

  if (app.workspace.getActiveFile()?.path === file.path) {
    new Notice(`${APP_NAME}: Already open!`, 1000);
    return ;
  }

  await app.workspace.getLeaf().openFile(file);
}
