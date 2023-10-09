import * as ts from "typescript";
import * as tstl from "typescript-to-lua";

declare module "typescript" {
  interface Statement {
    jsDoc?: ts.JSDoc[];
  }
}

class Plugin implements tstl.Plugin {
  public beforeTransform(
    program: ts.Program,
    options: tstl.CompilerOptions,
    emitHost: tstl.EmitHost
  ) {
    for (const file of program.getSourceFiles()) {
      if (file.isDeclarationFile && file.statements.length) {
        if (!file.statements[0].jsDoc) {
          file.statements[0].jsDoc = [];
        }

        const noSelfInFile = ts.factory.createJSDocComment(undefined, [
          ts.factory.createJSDocUnknownTag(
            ts.factory.createIdentifier("noSelfInFile")
          )
        ]);
        file.statements[0].jsDoc.unshift(noSelfInFile);
      }
    }
  }
}

const plugin = new Plugin();
export default plugin;