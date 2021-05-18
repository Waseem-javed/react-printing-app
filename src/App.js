import React, { Component } from "react";
import Container from '@material-ui/core/Container';
import PdfComponent from "./components/PdfComponent";

import {
  PDFDownloadLink,
  loadingReportData
} from "@react-pdf/renderer";

class App extends Component {
  render() {
    return (
      <Container maxWidth="sm">
        <div className="form-group">
          <label htmlFor="button" className="d-block small">
            Click the Below Button to Download a PDF file
          </label>
          {!loadingReportData && (
            <PDFDownloadLink
              document={<PdfComponent />}
              fileName="somename.pdf">
              {({ blob, url, loading, error }) =>
                loading ? "Loading document..." : "Download now!"
              }
            </PDFDownloadLink>
          )}
        </div>
      </Container>
    );
}
}

export default App;
