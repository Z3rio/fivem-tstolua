import * as ts from "typescript";
import * as tstl from "typescript-to-lua";

const functionRemaps: Record<string, string> = {
  onNet: "RegisterNetEvent"
};

const plugin: tstl.Plugin = {
  visitors: {
    // Visit string literals, if original transformer returns a string literal, change the string to "bar" instead
    [ts.SyntaxKind.CallExpression]: (node, context) => {
      const result = context.superTransformExpression(node);

      if (
        tstl.isCallExpression(result) &&
        "text" in result.expression &&
        typeof result.expression.text == "string" &&
        functionRemaps[result.expression.text]
      ) {
        result.expression.text = functionRemaps[result.expression.text];
      }

      return result;
    }
  }
};

export default plugin;