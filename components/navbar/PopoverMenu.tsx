"use client";
import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

export default function PopoverMenu({
  handleClose,
  open,
  anchorEl,
  children,
}: any) {
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        PaperProps={{
          style: {
            background: "#1e2a37",
            padding: "15px",
            borderRadius: "10px",
          },
        }}
      >
        {children}
      </Popover>
    </div>
  );
}
