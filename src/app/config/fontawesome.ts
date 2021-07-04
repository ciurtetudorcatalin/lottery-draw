import { FaConfig, FaIconLibrary } from "@fortawesome/angular-fontawesome";
import { faHistory, faPlay, faRedoAlt, IconDefinition } from "@fortawesome/free-solid-svg-icons";

const usedIcons: readonly IconDefinition[] = Object.freeze([
  faHistory,
  faPlay,
  faRedoAlt
]);


export function configureFontAwesomeLibrary(library: FaIconLibrary, config: FaConfig) {
  config.defaultPrefix = 'fas';
  library.addIcons(...usedIcons);
}
