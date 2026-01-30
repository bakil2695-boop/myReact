const root = document.getElementById("root");
const rootele = ReactDOM.createRoot(root);
const heading = React.createElement(
  "div",
  { id: "my-heading" },
  [React.createElement(
  "div",
  { id: "my-heading2" },
  "Hello from nested div!"
),React.createElement(
  "div",
{ id: "my-heading3" },
  "Hello from nested div!"
)]
);
rootele.render(heading);
