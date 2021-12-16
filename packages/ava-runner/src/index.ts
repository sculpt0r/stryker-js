import { declareFactoryPlugin, PluginKind } from '@stryker-mutator/api/plugin';

import strykerValidationSchema from '../schema/mocha-runner-options.json';

import { createAvaTestRunner, createAvaTestRunnerFactory } from './ava-runner-factories';
import { AvaTestRunner } from './ava-test-runner';

export const strykerPlugins = [declareFactoryPlugin(PluginKind.TestRunner, 'ava', createAvaTestRunner)];

export { strykerValidationSchema, AvaTestRunner, createAvaTestRunnerFactory };
