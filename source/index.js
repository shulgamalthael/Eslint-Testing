const i = 0;

function defineElement(tag, attributes) {
  if (!document || !tag || typeof tag !== "string") return null;
  const element = document.createElement(tag);
  if (attributes) {
    Object.entries(attributes)
      .forEach((attribute) => Array.isArray(attribute)
                && attribute.length > 1
                && element.setAttribute(attribute[0], attribute[1]));
  }

  return element;
}

defineElement("div", { id: "1", name: "element", i });
