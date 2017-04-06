'use strict';
import * as vscode from 'vscode';
import { Selection } from "vscode";

export function activate(context: vscode.ExtensionContext) {


    let disposable = vscode.commands.registerCommand('extension.makeVar', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return; // No open text editor
        }

        const selection = editor.selection;

        editor.edit(edit => {
            const startOfLine = selection.start.with(undefined, 0);
            const line = startOfLine.line;
            const selectedText = editor.document.getText(selection);
            const parts = [
                "const ",
                "newVar",
                " = ",
                selectedText,
                ";\r\n"
            ]
            edit.replace(startOfLine, parts.join(''));

            edit.replace(selection, parts[1])

            process.nextTick(() => {
                editor.selections = [
                    new Selection(selection.start.translate(1), selection.start.translate(1, parts[1].length)),
                    new Selection(line, parts[0].length, line, parts[0].length + parts[1].length)
                ]
            })

        });
    });

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}