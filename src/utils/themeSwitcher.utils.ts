import { useMainStore } from "../store";

export default function switchTheme(lightMode: boolean) {
  const store = useMainStore();
  localStorage.setItem("lightMode", lightMode.toString());
  const elementId = "theme-link";
  const linkElement = document.getElementById(elementId);
  if (linkElement === null) return;
  const href = linkElement.getAttribute("href");
  if (href === null) return;
  const cloneLinkElement = linkElement.cloneNode(true) as Element;
  let newThemeUrl = "";

  newThemeUrl = lightMode ? href.replace(store.theme, "saga-orange") : href.replace(store.theme, "vela-orange");

  cloneLinkElement.setAttribute("id", elementId + "-clone");
  cloneLinkElement.setAttribute("href", newThemeUrl);
  cloneLinkElement.addEventListener("load", () => {
    linkElement.remove();
    cloneLinkElement.setAttribute("id", elementId);
  });
  if (linkElement.parentNode != null) {
    linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);
  }

  store.theme = lightMode ? "saga-orange" : "vela-orange";
}
