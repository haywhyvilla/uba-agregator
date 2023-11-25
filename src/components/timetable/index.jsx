"use client";

// ** Next Import
import Link from "next/link";

// ** MUI Imports
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

// ** Custom Components Imports
import PageHeader from "./pageheader";
import CardSnippet from "./cardSnippet";

// ** Styled Component

import DropzoneWrapper from "./reactDropZone";

// ** Demo Components Imports
import FileUploaderSingle from "./fileUploaderSingle";

// ** Source code imports
import * as source from "./fileUploaderSourceCode";

const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.primary.main,
}));

const FileUploader = () => {
  return (
    <DropzoneWrapper>
      <Grid
        container
        spacing={6}
        className="match-height"
        style={{ padding: "4rem" }}
      >
        <PageHeader
          title={
            <Typography variant="h4" sx={{ fontSize: "2.6rem", mb: 2 }}>
              Upload Time Table
            </Typography>
          }
          subtitle={
            <Typography sx={{ color: "text.secondary", fontSize: "2rem" }}>
              Drag-drop or Click to Upload Time Table
            </Typography>
          }
        />

        <Grid item xs={12}>
          {/* <CardSnippet
            title="Upload Timetable Files"
            code={{
              tsx: null,
              jsx: source.FileUploaderSingleJSXCode,
            }}
          > */}
          <FileUploaderSingle />
          {/* </CardSnippet> */}
        </Grid>
      </Grid>
    </DropzoneWrapper>
  );
};

export default FileUploader;
