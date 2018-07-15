/*
    This file will contain all the helper functions which are to be used in the App
 */

// replaces initial zeros with ''
// @param value
export function removeInitialZeros(value) {
    return value.replace(/^0+/, '');
}

// finds the top or left for an absolute container to place it in center with height or width respectively
// @param screenDimen - dimension of the screen either height or width
// @param componDimen - dimension of the componenet either height or width
export function obtainCenter(screenDimen,componDimen) {
    return ((screenDimen / 2) - (componDimen / 2));
}