import { describe, it, expect, vi } from 'vitest';
import { generateReportData } from './data';
import writeData from './util/io';

describe('generateReportData()', () => {
  it('should execute logFn if provided', () => {
    const logger = vi.fn();

    generateReportData(logger);

    expect(logger).toBeCalled();
  });
});
