import { HighlightStyle } from "@codemirror/language";
import { tags } from "@lezer/highlight";
import { vernacTag, tacticTag, terminatorTag, bulletTag, focusTag, admitTag } from "./rocq-cm6";
export { rocq } from "./rocq-cm6";

// Dark theme highlighting for Rocq language
export const highlight_dark = HighlightStyle.define([
    { tag: tags.comment, color: "#9ea0b1" },
    { tag: tags.keyword, color: "#e67065" },
    { tag: tags.number, color: "#e4a621" },
    { tag: tags.operator, color: "#0f99d4" },
    { tag: tags.punctuation, color: "#e9e8e8" },
    { tag: tags.string, color: "#3a9e38" },
    { tag: tags.variableName, color: "#e9e8e8" },
    // Custom defined tags
    { tag: admitTag, color: "#e4b301", fontStyle: "italic"},
    { tag: bulletTag, color: "#ff943c" },
    { tag: focusTag, color: "#ff943c" },
    { tag: tacticTag, color: "#56b3ff" },
    { tag: terminatorTag, color: "#56b3ff" },
    { tag: vernacTag, color: "#e67065" },
])

// Light theme highlighting for Rocq language
export const highlight_light = HighlightStyle.define([
    { tag: tags.comment, color: "#787c99", fontStyle: "italic" },
    { tag: tags.keyword, color: "#770088" /*, fontWeight: "bold" */ },
    { tag: tags.meta, color: "#4078f2" },
    { tag: tags.number, color: "#986801" },
    { tag: tags.operator, color: "#0184bc" },
    { tag: tags.punctuation, color: "#383a42" },
    { tag: tags.string, color: "#50a14f" },
    { tag: tags.typeName, color: "#c18401" },
    { tag: tags.variableName, color: "#383a42" },
    // Custom defined tags
    { tag: admitTag, color: "#e4b301", fontStyle: "italic"},
    { tag: bulletTag, color: "#ff7300" },
    { tag: focusTag, color: "#ff7300" },
    { tag: tacticTag, color: "#004cf0" },
    { tag: terminatorTag, color: "#004cf0" },
    { tag: vernacTag, color: "#e45649" },
]);
