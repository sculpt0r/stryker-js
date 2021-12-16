import {
  TestRunner,
  DryRunResult,
  DryRunOptions,
  MutantRunOptions,
  MutantRunResult,
  DryRunStatus,
  toMutantRunResult,
  CompleteDryRunResult,
  determineHitLimitReached,
} from '@stryker-mutator/api/test-runner';

export class AvaTestRunner implements TestRunner {
  init?(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  dryRun(options: DryRunOptions): Promise<DryRunResult> {
    throw new Error('Method not implemented.');
  }
  mutantRun(options: MutantRunOptions): Promise<MutantRunResult> {
    throw new Error('Method not implemented.');
  }
  dispose?(): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
