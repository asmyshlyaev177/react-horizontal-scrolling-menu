/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export { observableValue, transaction } from './observableImpl/base.js';
export { derived } from './observableImpl/derived.js';
export { autorun, autorunWithStore } from './observableImpl/autorun.js';
export * from './observableImpl/utils.js';
import { ConsoleObservableLogger, setLogger } from './observableImpl/logging.js';
const enableLogging = false;
if (enableLogging) {
    setLogger(new ConsoleObservableLogger());
}
