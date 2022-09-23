import React from "react";

class OtherStyleCard extends React.Component {
  render() {
    return (
        <div class="card">
                        <div class="header">
                            <h2>Other Style</h2>
                        </div>
                        <div class="body">
                            <p>You can use the mark tag to
                                <mark>highlight</mark> text.</p>
                            <p>
                                <del>This line of text is meant to be treated as deleted text.</del>
                            </p>
                            <p class="text-lowercase"><code>.text-lowercase</code> Lowercased text.</p>
                            <p class="text-uppercase"><code class="text-lowercase">.text-uppercase</code> Uppercased text.</p>
                            <p class="text-capitalize"><code class="text-lowercase">.text-capitalized</code> Capitalized text.</p>                            
                            <p>Make a paragraph stand out by adding <code>.lead</code></p>
                            <p class="lead">Objectively re-engineer maintainable total linkage after proactive intellectual capital. Dynamically evolve best-of-breed e-services for user-centric customer.</p>                            
                        </div>
                    </div>
    );
  }
}
export default OtherStyleCard
