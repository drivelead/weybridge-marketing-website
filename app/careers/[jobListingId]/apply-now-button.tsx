"use client";

import React from "react";
import { Button } from "@/components/ui/button";

export default function ApplyNowButton() {
  return (
    <Button
      onClick={() => {
        if (window) {
          const element = document.getElementById(
            "job-capplication-form-scroll"
          );

          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }
      }}
    >
      Apply now
    </Button>
  );
}
