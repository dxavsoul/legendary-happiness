const baseURL = "mxsarmiento.brainsolutions.nyc";

// default customization applied to the HTML in the main layout.tsx
const style = {
  theme: "dark", // dark | light
  neutral: "gray", // sand | gray | slate
  brand: "cyan", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  accent: "cyan", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  solid: "contrast", // color | contrast | inverse
  solidStyle: "flat", // flat | plastic
  border: "playful", // rounded | playful | conservative
  surface: "filled", // filled | translucent
  transition: "all", // all | micro | macro
  scaling: "100", // 90 | 95 | 100 | 105 | 110
};

// default metadata
const meta = {
  title: "Milton X Sarmiento - Portfolio",
  description:
    "Software Engineer and Designer based in New York City. I build delightful user  apps and experiences for the web.",
};

// default open graph data
const og = {
  title: "Milton X Sarmiento Software Developer",
  description: "",
  type: "website",
  image: "/images/cover.jpg"
};

// default schema data
const schema = {
  logo: "",
  type: "Organization",
  name: "One UI",
  description: "Brain Solutions is a software development company that specializes in building delightful user interfaces and experiences for the web. We are dedicated to delivering high-quality software solutions that meet the needs of our clients.",
  email: "mxsarmiento@brainsolutions.nyc",
};

// social links
const social = {
  twitter: "https://www.x.com/dxavsoul",
  linkedin: "https://www.linkedin.com/in/mxsarmiento",
  discord: "https://discord.com/invite/5EyAQ4eNdS",
};

export { baseURL, style, meta, og, schema, social };
