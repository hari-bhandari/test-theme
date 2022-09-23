import React from "react";
import {OverlayTrigger,Tooltip,Button} from "react-bootstrap";

class PositionCard extends React.Component {
  render() {
    return (
        <div class="card">
                        <div class="header">
                            <h2>Position</h2>
                        </div>
                        <div class="body">
                            <h6>Common values</h6>
                            <figure class="highlight">
                                <pre>
                                    <code class="language-html" data-lang="html">
                                        <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"position-static"</span><span class="nt">&gt;</span>...<span class="nt">&lt;/div&gt;</span><br/>
                                        <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"position-relative"</span><span class="nt">&gt;</span>...<span class="nt">&lt;/div&gt;</span><br/>
                                        <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"position-absolute"</span><span class="nt">&gt;</span>...<span class="nt">&lt;/div&gt;</span><br/>
                                        <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"position-fixed"</span><span class="nt">&gt;</span>...<span class="nt">&lt;/div&gt;</span><br/>
                                        <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"position-sticky"</span><span class="nt">&gt;</span>...<span class="nt">&lt;/div&gt;</span>
                                    </code>
                                </pre>
                            </figure>
                            <hr/>
                            <h6>Sticky top</h6>
                                <figure class="highlight">
                                    <pre>
                                        <code class="language-html" data-lang="html">
                                            <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"sticky-top"</span><span class="nt">&gt;</span>...<span class="nt">&lt;/div&gt;</span>
                                        </code>
                                    </pre>
                                </figure>
                            <div class="p-3 mb-2 bg-primary text-white sticky-top" >.sticky-top</div>
                            <hr/>
                            <h6>Fixed top</h6>
                                <figure class="highlight">
                                    <pre>
                                        <code class="language-html" data-lang="html">
                                            <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"fixed-bottom"</span><span class="nt">&gt;</span>...<span class="nt">&lt;/div&gt;</span>
                                        </code>
                                    </pre>
                                </figure>
                            <hr/>
                            <h6>Fixed bottom</h6>
                                <figure class="highlight">
                                    <pre>
                                        <code class="language-html" data-lang="html">
                                            <span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"fixed-bottom"</span><span class="nt">&gt;</span>...<span class="nt">&lt;/div&gt;</span>
                                        </code>
                                    </pre>
                                </figure>
                        </div>
                    </div>
    );
  }
}

export default PositionCard
