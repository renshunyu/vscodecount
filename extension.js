// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	let disposable = vscode.commands.registerCommand('extension.countWords', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const selection = editor.selection;
            const text = editor.document.getText(selection);
            const wordCount = text.trim().split(/\s+/).length;
            const tokenPattern = /[\w]+|[^a-zA-Z0-9_\s]/g
            let tokenMatch=0;
            while(tokenPattern.exec(text) !== null){tokenMatch++}
            const charPattern = /\S/g
            let charMatch=0;
            while(charPattern.exec(text) !== null){charMatch++}
            const rowPattern = /(\r?\n|\r|^)[\s]*[\S]+/g
            let rowMatch=0;
            while(rowPattern.exec(text) !== null){rowMatch++}
            

            vscode.window.showInformationMessage(`选中文本的字符数：${charMatch}\n选中文本的token数：${tokenMatch}\n选中文本的行数：${rowMatch}`);
        }
    });

    context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
