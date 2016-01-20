# ko-inject-context

Adds two more arguments to knockout Model constructor: `context` and `domNode`,
so knockout Model constructor will be called like `Model(params, context, domNode)`.

You can access `context`, `$root`, `$parent`, `$parents` and `domNode` from other Model's 
methods via `this`.

## Usage

```javascript
require(['inject-context'], function(injectContext) {
  function Model(params, context, domNode) {
    context.$root;
    context.$parent;
    context.$parents;
    domNode;
  }

  Model.prototype.someMethod = function() {
    this.cotext;
    this.$root;
    this.$parent;
    this.$parents;
    this.domNode;
  };

  return {
    viewModel: injectContext(Model),
    template: '<div></div>'
  };
});
```
