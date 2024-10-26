"use client";
import { redirect } from "next/navigation";

import React from "react";

const Products = () => {
  const userProfile = null;
  if (!userProfile) {
    redirect("/");
  }

  return (
      <div>
        <p>This is a product route of all the case

        dometho
        </p>
      </div>
  );
};

export default Products;
