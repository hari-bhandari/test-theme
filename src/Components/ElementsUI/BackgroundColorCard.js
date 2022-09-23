import React from "react";


class BackgroundColorCard extends React.Component {
  render() {
    return (
        <div class="card">
                        <div class="header">
                            <h2>Background color</h2>
                        </div>
                        <div class="body">
                            <p>Similar to the contextual text color classes, easily set the background of an element to any contextual class. Anchor components will darken on hover, just like the text classes. Background utilities <strong>do not set <code class="highlighter-rouge">color</code></strong>, so in some cases you’ll want to use <code class="highlighter-rouge">.text-*</code> utilities.</p>
                            <div class="p-3 mb-2 bg-primary text-white">.bg-primary</div>
                            <div class="p-3 mb-2 bg-secondary text-white">.bg-secondary</div>
                            <div class="p-3 mb-2 bg-success text-white">.bg-success</div>
                            <div class="p-3 mb-2 bg-danger text-white">.bg-danger</div>
                            <div class="p-3 mb-2 bg-warning text-dark">.bg-warning</div>
                            <div class="p-3 mb-2 bg-info text-white">.bg-info</div>
                            <div class="p-3 mb-2 bg-light text-dark">.bg-light</div>
                            <div class="p-3 mb-2 bg-dark text-white">.bg-dark</div>
                            <div class="p-3 mb-2 bg-white text-dark">.bg-white</div>
                            <div class="p-3 mb-2 bg-transparent text-dark">.bg-transparent</div>
                        </div>
                    </div>
    );
  }
}
export default BackgroundColorCard
