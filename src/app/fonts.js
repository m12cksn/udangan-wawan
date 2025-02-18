import React from "react";
import { Pacifico, Poppins } from "next/font/google";

export const fonts = () => {
  return <div>fonts</div>;
};
export const berkshire = Pacifico({
  subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext"],
  weight: ["400"],
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
