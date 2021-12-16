import { INSTRUMENTER_CONSTANTS } from '@stryker-mutator/api/core';
import { commonTokens, Injector, PluginContext, tokens } from '@stryker-mutator/api/plugin';
import { DirectoryRequireCache } from '@stryker-mutator/util';

import { MochaAdapter } from './mocha-adapter';
import { MochaOptionsLoader } from './mocha-options-loader';
import { AvaTestRunner } from './ava-test-runner';
import * as pluginTokens from './plugin-tokens';

export const createAvaTestRunner = createAvaTestRunnerFactory();

export function createAvaTestRunnerFactory(namespace: typeof INSTRUMENTER_CONSTANTS.NAMESPACE | '__stryker2__' = INSTRUMENTER_CONSTANTS.NAMESPACE): {
  (injector: Injector<PluginContext>): AvaTestRunner;
  inject: ['$injector'];
} {
  avaTestRunnerFactory.inject = tokens(commonTokens.injector);
  function avaTestRunnerFactory(injector: Injector<PluginContext>): AvaTestRunner {
    return injector
      .provideClass(pluginTokens.loader, MochaOptionsLoader)
      .provideClass(pluginTokens.mochaAdapter, MochaAdapter)
      .provideClass(pluginTokens.directoryRequireCache, DirectoryRequireCache)
      .provideValue(pluginTokens.globalNamespace, namespace)
      .injectClass(AvaTestRunner);
  }
  return avaTestRunnerFactory;
}
