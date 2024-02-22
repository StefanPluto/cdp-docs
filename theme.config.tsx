import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <img
        style={{ width: "60px" }}
        src="https://raffle-image-storage.s3.eu-central-1.amazonaws.com//ChurnStopLogo-removebg-preview.png"
      />
      <h2>StopChurn</h2>
    </div>
  ),
  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  footer: {
    text: "Nextra Docs Template",
  },
};

export default config;
