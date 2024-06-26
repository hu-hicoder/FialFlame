import * as vscode from "vscode";

export function activateDynamicFontSize() {
  const editor = vscode.window.activeTextEditor;
  if (editor) {
    vscode.workspace.onDidChangeTextDocument((event) => {

      if (event.document === editor.document) {
        if (Math.floor(Math.random() * 5) === 3) {
          const newSize = Math.floor(Math.random() * 4) + 12;

          if (newSize) {
            vscode.workspace
              .getConfiguration()
              .update(
                "editor.fontSize",
                newSize,
                vscode.ConfigurationTarget.Global
              );
          }
        }

      }
    });
  }
}
