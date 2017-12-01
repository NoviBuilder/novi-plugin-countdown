import Editor from "./Editor";
const React = novi.react.React;
import Settings from "./Settings";
import * as ExcerptFunction from "./ExcerptFunction";
const Language = novi.language;
const Plugin = {
    name: "novi-plugin-countdown",
    title: "Novi Countdown",
    description: "Novi Countdown description",
    version: "1.0.1",
    dependencies: {
        novi: "0.8.6"
    },
    defaults: {
        querySelector: ".novi-countdown"
    },
    ui: {
        editor: [Editor],
        settings: <Settings />,
    },
    excerpt : ExcerptFunction.validCountdown,
    onLanguageChange: onLanguageChange
};

function onLanguageChange(plugin){
    let messages = Language.getDataByKey("novi-plugin-countdown");

    plugin.ui.editor[0].title = messages.editor.title;
    plugin.ui.editor[0].tooltip = messages.editor.tooltip;
    plugin.ui.editor[0].header[1] = <span>{messages.editor.tooltip}</span>;

    return plugin;
}

novi.plugins.register(Plugin);
