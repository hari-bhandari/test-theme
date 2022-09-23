import React from "react";

class TextStyleCard extends React.Component {
  render() {
    return (
        <div class="card">
                        <div class="header">
                            <h2>Text Style</h2>
                        </div>
                        <div class="body">
                            <p class="text-muted"><code>.text-muted</code> Convey meaning through color with a handful of emphasis utility classes.</p>
                            <p class="text-primary"><code>.text-primary</code> Convey meaning through color with a handful of emphasis utility classes.</p>
                            <p class="text-success"><code>.text-success</code> Convey meaning through color with a handful of emphasis utility classes.</p>
                            <p class="text-info"><code>.text-info</code> Convey meaning through color with a handful of emphasis utility classes.</p>
                            <p class="text-warning"><code>.text-warning</code> Convey meaning through color with a handful of emphasis utility classes.</p>
                            <p class="text-danger"><code>.text-danger</code> Convey meaning through color with a handful of emphasis utility classes.</p>
                        </div>
                    </div>
    );
  }
}
export default TextStyleCard
