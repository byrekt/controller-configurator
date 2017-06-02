/**
 * Mock retrieval of action list.
 */
import _actionsList from './actionsList.json';

const TIMEOUT = 100;

export default {
  getActionsList: (cb, timeout) => setTimeout(() => cb(_actionsList), timeout || TIMEOUT)
}