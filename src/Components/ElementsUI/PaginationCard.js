import React from "react";

class PaginationCard extends React.Component {
  render() {
    return (
        <div class="card">
                        <div class="header">
                            <h2>Pagination</h2>
                        </div>
                        <div class="body">
                            <nav aria-label="Page navigation example">
                                <ul class="pagination">
                                    <li class="page-item"><a class="page-link" href="javascript:void(0);">Previous</a></li>
                                    <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
                                    <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
                                    <li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
                                    <li class="page-item"><a class="page-link" href="javascript:void(0);">Next</a></li>
                                </ul>
                            </nav>
                            <hr/>
                            <h6>Working with icons</h6>
                            <nav aria-label="Page navigation example">
                                <ul class="pagination">
                                    <li class="page-item">
                                    <a class="page-link" href="javascript:void(0);" aria-label="Previous">
                                        <span aria-hidden="true">«</span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
                                    <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
                                    <li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
                                    <li class="page-item">
                                    <a class="page-link" href="javascript:void(0);" aria-label="Next">
                                        <span aria-hidden="true">»</span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                    </li>
                                </ul>
                            </nav>
                            <hr/>
                            <h6>Disabled and active states</h6>
                            <nav aria-label="...">
                                <ul class="pagination">
                                    <li class="page-item disabled">
                                    <a class="page-link" href="javascript:void(0);" tabindex="-1">Previous</a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
                                    <li class="page-item active">
                                    <a class="page-link" href="javascript:void(0);">2 <span class="sr-only">(current)</span></a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
                                    <li class="page-item">
                                    <a class="page-link" href="javascript:void(0);">Next</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
    );
  }
}
export default PaginationCard
