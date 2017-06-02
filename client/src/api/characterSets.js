/**
 * Mock retrieval of character sets.
 */
import _characterSets from './characterSets.json';

const TIMEOUT = 100;

export default {
  getCharacterSets: (cb, timeout) => setTimeout(() => cb(_characterSets), timeout || TIMEOUT)
}