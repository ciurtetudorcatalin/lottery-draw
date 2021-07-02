import { FaConfig, FaIconLibrary } from "@fortawesome/angular-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

const usedIcons: readonly IconDefinition[] = Object.freeze([

]);


export function configureFontAwesomeLibrary(library: FaIconLibrary, config: FaConfig) {
  config.defaultPrefix = 'far';
  library.addIcons(...usedIcons);
}
