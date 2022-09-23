import React from "react";


class ContextualTextColorsCard extends React.Component {
  render() {
    return (
        <div class="card">
                        <div class="header">
                            <h2>Contextual text Colors</h2>
                        </div>
                        <div class="body">
                            <p>classes also work well on anchors with the provided hover and focus states. <strong>Note that the <code class="highlighter-rouge">.text-white</code> and <code class="highlighter-rouge">.text-muted</code> class has no link styling.</strong></p>
                            <p><a href="javascript:void(0);" class="text-primary">Primary link</a></p>
                            <p><a href="javascript:void(0);" class="text-secondary">Secondary link</a></p>
                            <p><a href="javascript:void(0);" class="text-success">Success link</a></p>
                            <p><a href="javascript:void(0);" class="text-danger">Danger link</a></p>
                            <p><a href="javascript:void(0);" class="text-warning">Warning link</a></p>
                            <p><a href="javascript:void(0);" class="text-info">Info link</a></p>
                            <p><a href="javascript:void(0);" class="text-light bg-dark">Light link</a></p>
                            <p><a href="javascript:void(0);" class="text-dark">Dark link</a></p>
                            <p><a href="javascript:void(0);" class="text-muted">Muted link</a></p>
                            <p><a href="javascript:void(0);" class="text-white bg-dark">White link</a></p>
                        </div>
                    </div>
    );
  }
}
export default ContextualTextColorsCard
