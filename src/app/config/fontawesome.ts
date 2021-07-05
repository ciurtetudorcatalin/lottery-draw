import { FaConfig, FaIconLibrary } from "@fortawesome/angular-fontawesome";
import { faChevronLeft, faChevronRight, faHistory, faPlay, faRedoAlt, IconDefinition } from "@fortawesome/free-solid-svg-icons";

const usedIcons: readonly IconDefinition[] = Object.freeze([
  faHistory,
  faPlay,
  faRedoAlt,
  faChevronRight,
  faChevronLeft
]);


export function configureFontAwesomeLibrary(library: FaIconLibrary, config: FaConfig) {
  config.defaultPrefix = 'fas';
  library.addIcons(...usedIcons);
}
