import _createAction from './create-action';
import _handleMutation from './handle-mutation';
import _createHandleError from './handle-error-plugin';
import _createHandlePending from './handle-pending-plugin';
import _createSyncState from './sync-state-plugin';

export const createAction = _createAction;
export const handleMutation = _handleMutation;
export const createHandleError = _createHandleError;
export const createHandlePending = _createHandlePending;
export const createSyncState = _createSyncState;
