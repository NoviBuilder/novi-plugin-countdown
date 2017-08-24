import Editor from "./Editor";
const React = novi.react.React;
import Settings from "./Settings";
import * as ExcerptFunction from "./ExcerptFunction";

const Plugin = {
    name: "novi-plugin-countdown",
    title: "Novi Countdown",
    description: "Novi Countdown description",
    version: "1.0.0",
    dependencies: {
    },
    defaults: {
        querySelector: ".novi-countdown"
    },
    ui: {
        editor: [Editor],
        settings: <Settings />,
    },
    excerpt : ExcerptFunction.validCountdown
};

novi.plugins.register(Plugin);
