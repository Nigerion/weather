import { Theme } from "../context/ThmeContext";

export function changeCssRootVariables(theme: Theme) {
  const root = document.querySelector(":root") as HTMLElement;
  const components = [
    "components-background",
    "card-background",
    "card-shadow",
    "text-color",
    "body-background",
  ];
  components.forEach((component) => {
    root.style.setProperty(
      `--${component}-default`,
      `var(--${component}-${theme})`
    );
  });
}
