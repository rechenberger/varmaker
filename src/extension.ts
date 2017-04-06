'use strict';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {


    let disposable = vscode.commands.registerCommand('extension.makeVar', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return; // No open text editor
        }

        const selection = editor.selection;
        const text = editor.document.getText(selection);

        // Display a message box to the user
        vscode.window.showInformationMessage('Selected text: ' + text);
    });

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}