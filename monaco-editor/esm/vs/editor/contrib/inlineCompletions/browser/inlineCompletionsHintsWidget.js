/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { h } from '../../../../base/browser/dom.js';
import { ActionBar } from '../../../../base/browser/ui/actionbar/actionbar.js';
import { KeybindingLabel, unthemedKeybindingLabelOptions } from '../../../../base/browser/ui/keybindingLabel/keybindingLabel.js';
import { Action, Separator } from '../../../../base/common/actions.js';
import { equals } from '../../../../base/common/arrays.js';
import { RunOnceScheduler } from '../../../../base/common/async.js';
import { Codicon } from '../../../../base/common/codicons.js';
import { Disposable, toDisposable } from '../../../../base/common/lifecycle.js';
import { autorun, derived, observableFromEvent } from '../../../../base/common/observable.js';
import { autorunWithStore2 } from '../../../../base/common/observableImpl/autorun.js';
import { OS } from '../../../../base/common/platform.js';
import { ThemeIcon } from '../../../../base/common/themables.js';
import './inlineCompletionsHintsWidget.css';
import { Position } from '../../../common/core/position.js';
import { InlineCompletionTriggerKind } from '../../../common/languages.js';
import { showPreviousInlineSuggestionActionId, showNextInlineSuggestionActionId } from './commandIds.js';
import { localize } from '../../../../nls.js';
import { createAndFillInActionBarActions, MenuEntryActionViewItem } from '../../../../platform/actions/browser/menuEntryActionViewItem.js';
import { WorkbenchToolBar } from '../../../../platform/actions/browser/toolbar.js';
import { IMenuService, MenuId, MenuItemAction } from '../../../../platform/actions/common/actions.js';
import { ICommandService } from '../../../../platform/commands/common/commands.js';
import { IContextKeyService } from '../../../../platform/contextkey/common/contextkey.js';
import { IContextMenuService } from '../../../../platform/contextview/browser/contextView.js';
import { IInstantiationService } from '../../../../platform/instantiation/common/instantiation.js';
import { IKeybindingService } from '../../../../platform/keybinding/common/keybinding.js';
import { ITelemetryService } from '../../../../platform/telemetry/common/telemetry.js';
import { registerIcon } from '../../../../platform/theme/common/iconRegistry.js';
export let InlineCompletionsHintsWidget = class InlineCompletionsHintsWidget extends Disposable {
    constructor(editor, model, instantiationService) {
        super();
        this.editor = editor;
        this.model = model;
        this.instantiationService = instantiationService;
        this.alwaysShowToolbar = observableFromEvent(this.editor.onDidChangeConfiguration, () => this.editor.getOption(60 /* EditorOption.inlineSuggest */).showToolbar === 'always');
        this.sessionPosition = undefined;
        this.position = derived('position', reader => {
            var _a, _b, _c;
            const ghostText = (_a = this.model.read(reader)) === null || _a === void 0 ? void 0 : _a.ghostText.read(reader);
            if (!this.alwaysShowToolbar.read(reader) || !ghostText || ghostText.parts.length === 0) {
                this.sessionPosition = undefined;
                return null;
            }
            const firstColumn = ghostText.parts[0].column;
            if (this.sessionPosition && this.sessionPosition.lineNumber !== ghostText.lineNumber) {
                this.sessionPosition = undefined;
            }
            const position = new Position(ghostText.lineNumber, Math.min(firstColumn, (_c = (_b = this.sessionPosition) === null || _b === void 0 ? void 0 : _b.column) !== null && _c !== void 0 ? _c : Number.MAX_SAFE_INTEGER));
            this.sessionPosition = position;
            return position;
        });
        this._register(autorunWithStore2('setup content widget', (reader, store) => {
            const model = this.model.read(reader);
            if (!model || !this.alwaysShowToolbar.read(reader)) {
                return;
            }
            const contentWidget = store.add(this.instantiationService.createInstance(InlineSuggestionHintsContentWidget, this.editor, true, this.position, model.selectedInlineCompletionIndex, model.inlineCompletionsCount, model.selectedInlineCompletion.map(v => { var _a; return (_a = v === null || v === void 0 ? void 0 : v.inlineCompletion.source.inlineCompletions.commands) !== null && _a !== void 0 ? _a : []; })));
            editor.addContentWidget(contentWidget);
            store.add(toDisposable(() => editor.removeContentWidget(contentWidget)));
            store.add(autorun('request explicit', reader => {
                const position = this.position.read(reader);
                if (!position) {
                    return;
                }
                if (model.lastTriggerKind.read(reader) !== InlineCompletionTriggerKind.Explicit) {
                    model.triggerExplicitly();
                }
            }));
        }));
    }
};
InlineCompletionsHintsWidget = __decorate([
    __param(2, IInstantiationService)
], InlineCompletionsHintsWidget);
const inlineSuggestionHintsNextIcon = registerIcon('inline-suggestion-hints-next', Codicon.chevronRight, localize('parameterHintsNextIcon', 'Icon for show next parameter hint.'));
const inlineSuggestionHintsPreviousIcon = registerIcon('inline-suggestion-hints-previous', Codicon.chevronLeft, localize('parameterHintsPreviousIcon', 'Icon for show previous parameter hint.'));
export let InlineSuggestionHintsContentWidget = class InlineSuggestionHintsContentWidget extends Disposable {
    static get dropDownVisible() { return this._dropDownVisible; }
    createCommandAction(commandId, label, iconClassName) {
        const action = new Action(commandId, label, iconClassName, true, () => this._commandService.executeCommand(commandId));
        const kb = this.keybindingService.lookupKeybinding(commandId, this._contextKeyService);
        let tooltip = label;
        if (kb) {
            tooltip = localize({ key: 'content', comment: ['A label', 'A keybinding'] }, '{0} ({1})', label, kb.getLabel());
        }
        action.tooltip = tooltip;
        return action;
    }
    constructor(editor, withBorder, _position, _currentSuggestionIdx, _suggestionCount, _extraCommands, _commandService, instantiationService, keybindingService, _contextKeyService, _menuService) {
        super();
        this.editor = editor;
        this.withBorder = withBorder;
        this._position = _position;
        this._currentSuggestionIdx = _currentSuggestionIdx;
        this._suggestionCount = _suggestionCount;
        this._extraCommands = _extraCommands;
        this._commandService = _commandService;
        this.keybindingService = keybindingService;
        this._contextKeyService = _contextKeyService;
        this._menuService = _menuService;
        this.id = `InlineSuggestionHintsContentWidget${InlineSuggestionHintsContentWidget.id++}`;
        this.allowEditorOverflow = true;
        this.suppressMouseDown = false;
        this.nodes = h('div.inlineSuggestionsHints', { className: this.withBorder ? '.withBorder' : '' }, [
            h('div', { style: { display: 'flex' } }, [
                h('div@actionBar', { className: 'custom-actions' }),
                h('div@toolBar'),
            ])
        ]);
        this.previousAction = this.createCommandAction(showPreviousInlineSuggestionActionId, localize('previous', 'Previous'), ThemeIcon.asClassName(inlineSuggestionHintsPreviousIcon));
        this.availableSuggestionCountAction = new Action('inlineSuggestionHints.availableSuggestionCount', '', undefined, false);
        this.nextAction = this.createCommandAction(showNextInlineSuggestionActionId, localize('next', 'Next'), ThemeIcon.asClassName(inlineSuggestionHintsNextIcon));
        // TODO@hediet: deprecate MenuId.InlineCompletionsActions
        this.inlineCompletionsActionsMenus = this._register(this._menuService.createMenu(MenuId.InlineCompletionsActions, this._contextKeyService));
        this.clearAvailableSuggestionCountLabelDebounced = this._register(new RunOnceScheduler(() => {
            this.availableSuggestionCountAction.label = '';
        }, 100));
        this.disableButtonsDebounced = this._register(new RunOnceScheduler(() => {
            this.previousAction.enabled = this.nextAction.enabled = false;
        }, 100));
        this.lastCommands = [];
        const actionBar = this._register(new ActionBar(this.nodes.actionBar));
        actionBar.push(this.previousAction, { icon: true, label: false });
        actionBar.push(this.availableSuggestionCountAction);
        actionBar.push(this.nextAction, { icon: true, label: false });
        this.toolBar = this._register(instantiationService.createInstance(CustomizedMenuWorkbenchToolBar, this.nodes.toolBar, MenuId.InlineSuggestionToolbar, {
            menuOptions: { renderShortTitle: true },
            toolbarOptions: { primaryGroup: g => g.startsWith('primary') },
            actionViewItemProvider: (action, options) => {
                return action instanceof MenuItemAction ? instantiationService.createInstance(StatusBarViewItem, action, undefined) : undefined;
            },
            telemetrySource: 'InlineSuggestionToolbar',
        }));
        this._register(this.toolBar.onDidChangeDropdownVisibility(e => {
            InlineSuggestionHintsContentWidget._dropDownVisible = e;
        }));
        this._register(autorun('update position', (reader) => {
            this._position.read(reader);
            this.editor.layoutContentWidget(this);
        }));
        this._register(autorun('counts', (reader) => {
            const suggestionCount = this._suggestionCount.read(reader);
            const currentSuggestionIdx = this._currentSuggestionIdx.read(reader);
            if (suggestionCount !== undefined) {
                this.clearAvailableSuggestionCountLabelDebounced.cancel();
                this.availableSuggestionCountAction.label = `${currentSuggestionIdx + 1}/${suggestionCount}`;
            }
            else {
                this.clearAvailableSuggestionCountLabelDebounced.schedule();
            }
            if (suggestionCount !== undefined && suggestionCount > 1) {
                this.disableButtonsDebounced.cancel();
                this.previousAction.enabled = this.nextAction.enabled = true;
            }
            else {
                this.disableButtonsDebounced.schedule();
            }
        }));
        this._register(autorun('extra commands', (reader) => {
            const extraCommands = this._extraCommands.read(reader);
            if (equals(this.lastCommands, extraCommands)) {
                // nothing to update
                return;
            }
            this.lastCommands = extraCommands;
            const extraActions = extraCommands.map(c => ({
                class: undefined,
                id: c.id,
                enabled: true,
                tooltip: c.tooltip || '',
                label: c.title,
                run: (event) => {
                    return this._commandService.executeCommand(c.id);
                },
            }));
            for (const [_, group] of this.inlineCompletionsActionsMenus.getActions()) {
                for (const action of group) {
                    if (action instanceof MenuItemAction) {
                        extraActions.push(action);
                    }
                }
            }
            if (extraActions.length > 0) {
                extraActions.unshift(new Separator());
            }
            this.toolBar.setAdditionalSecondaryActions(extraActions);
        }));
    }
    getId() { return this.id; }
    getDomNode() {
        return this.nodes.root;
    }
    getPosition() {
        return {
            position: this._position.get(),
            preference: [1 /* ContentWidgetPositionPreference.ABOVE */, 2 /* ContentWidgetPositionPreference.BELOW */],
            positionAffinity: 3 /* PositionAffinity.LeftOfInjectedText */,
        };
    }
};
InlineSuggestionHintsContentWidget._dropDownVisible = false;
InlineSuggestionHintsContentWidget.id = 0;
InlineSuggestionHintsContentWidget = __decorate([
    __param(6, ICommandService),
    __param(7, IInstantiationService),
    __param(8, IKeybindingService),
    __param(9, IContextKeyService),
    __param(10, IMenuService)
], InlineSuggestionHintsContentWidget);
class StatusBarViewItem extends MenuEntryActionViewItem {
    updateLabel() {
        const kb = this._keybindingService.lookupKeybinding(this._action.id, this._contextKeyService);
        if (!kb) {
            return super.updateLabel();
        }
        if (this.label) {
            const div = h('div.keybinding').root;
            const k = new KeybindingLabel(div, OS, Object.assign({ disableTitle: true }, unthemedKeybindingLabelOptions));
            k.set(kb);
            this.label.textContent = this._action.label;
            this.label.appendChild(div);
            this.label.classList.add('inlineSuggestionStatusBarItemLabel');
        }
    }
}
export let CustomizedMenuWorkbenchToolBar = class CustomizedMenuWorkbenchToolBar extends WorkbenchToolBar {
    constructor(container, menuId, options2, menuService, contextKeyService, contextMenuService, keybindingService, telemetryService) {
        super(container, Object.assign({ resetMenu: menuId }, options2), menuService, contextKeyService, contextMenuService, keybindingService, telemetryService);
        this.menuId = menuId;
        this.options2 = options2;
        this.menuService = menuService;
        this.contextKeyService = contextKeyService;
        this.menu = this._store.add(this.menuService.createMenu(this.menuId, this.contextKeyService, { emitEventsForSubmenuChanges: true }));
        this.additionalActions = [];
        this._store.add(this.menu.onDidChange(() => this.updateToolbar()));
        this.updateToolbar();
    }
    updateToolbar() {
        var _a, _b, _c, _d, _e, _f, _g;
        const primary = [];
        const secondary = [];
        createAndFillInActionBarActions(this.menu, (_a = this.options2) === null || _a === void 0 ? void 0 : _a.menuOptions, { primary, secondary }, (_c = (_b = this.options2) === null || _b === void 0 ? void 0 : _b.toolbarOptions) === null || _c === void 0 ? void 0 : _c.primaryGroup, (_e = (_d = this.options2) === null || _d === void 0 ? void 0 : _d.toolbarOptions) === null || _e === void 0 ? void 0 : _e.shouldInlineSubmenu, (_g = (_f = this.options2) === null || _f === void 0 ? void 0 : _f.toolbarOptions) === null || _g === void 0 ? void 0 : _g.useSeparatorsInPrimaryActions);
        secondary.push(...this.additionalActions);
        this.setActions(primary, secondary);
    }
    setAdditionalSecondaryActions(actions) {
        if (equals(this.additionalActions, actions, (a, b) => a === b)) {
            // don't update if the actions are the same
            return;
        }
        this.additionalActions = actions;
        this.updateToolbar();
    }
};
CustomizedMenuWorkbenchToolBar = __decorate([
    __param(3, IMenuService),
    __param(4, IContextKeyService),
    __param(5, IContextMenuService),
    __param(6, IKeybindingService),
    __param(7, ITelemetryService)
], CustomizedMenuWorkbenchToolBar);
