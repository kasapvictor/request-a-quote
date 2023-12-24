import { AxiosError } from 'axios';
import { beforeEach, describe, expect, it } from 'vitest';

import { throwFormattedError } from '@shared/api/throw-formatted-error';

describe('Throw formatted error for API Requests', () => {
  let MOCK_CODE: string;
  let MOCK_ERROR_MESSAGE: string;
  let MOCK_MESSAGE: string;
  let MOCK_STATUS_TEXT: string;
  let MOCK_STATUS_NUMBER: number;
  let MOCK_URL: string;

  beforeEach(() => {
    MOCK_CODE = 'ERR_BAD_REQUEST';
    MOCK_MESSAGE = 'Request failed with status code 405';
    MOCK_ERROR_MESSAGE = 'Error message';
    MOCK_STATUS_TEXT = 'Bad Request';
    MOCK_STATUS_NUMBER = 405;
    MOCK_URL = '/test';
  });

  it('1) Should throw AxiosError with message', () => {
    const mockResponse = {
      message: MOCK_MESSAGE,
      data: { message: MOCK_ERROR_MESSAGE },
      status: MOCK_STATUS_NUMBER,
      statusText: MOCK_STATUS_TEXT,
      headers: {},
      config: {
        url: MOCK_URL,
        method: 'get',
        headers: {} as never,
      },
    };

    const mockAxiosError = new AxiosError(MOCK_MESSAGE, MOCK_CODE, mockResponse.config, {}, mockResponse);

    expect.assertions(1);

    try {
      throwFormattedError(mockAxiosError);
    } catch (err) {
      expect(err).toEqual(MOCK_ERROR_MESSAGE);
    }
  });

  it('2) Should throw AxiosError with code', () => {
    const mockResponse = {
      message: MOCK_MESSAGE,
      data: { message: null },
      status: MOCK_STATUS_NUMBER,
      statusText: MOCK_STATUS_TEXT,
      headers: {},
      config: {
        url: MOCK_URL,
        method: 'get',
        headers: {} as never,
      },
    };

    const mockAxiosError = new AxiosError(MOCK_MESSAGE, MOCK_CODE, mockResponse.config, {}, mockResponse);

    expect.assertions(1);

    try {
      throwFormattedError(mockAxiosError);
    } catch (err) {
      expect(err).toEqual(MOCK_STATUS_NUMBER);
    }
  });

  it('3) Should be throw Error when withThrow true', () => {
    const mockResponse = {
      message: MOCK_MESSAGE,
      data: { message: MOCK_ERROR_MESSAGE },
      status: MOCK_STATUS_NUMBER,
      statusText: MOCK_STATUS_TEXT,
      headers: {},
      config: {
        url: MOCK_URL,
        method: 'get',
        headers: {} as never,
      },
    };

    const mockAxiosError = new AxiosError(MOCK_MESSAGE, MOCK_CODE, mockResponse.config, {}, mockResponse);

    expect.assertions(2);

    try {
      throwFormattedError(mockAxiosError, true);
    } catch (err) {
      expect(err).toBeInstanceOf(Error);
      expect((err as Error).message).toEqual(MOCK_ERROR_MESSAGE);
    }
  });

  it('4) Should be throw Error when withThrow false', () => {
    const mockResponse = {
      message: MOCK_MESSAGE,
      data: { message: MOCK_ERROR_MESSAGE },
      status: MOCK_STATUS_NUMBER,
      statusText: MOCK_STATUS_TEXT,
      headers: {},
      config: {
        url: MOCK_URL,
        method: 'get',
        headers: {} as never,
      },
    };

    const mockAxiosError = new AxiosError(MOCK_MESSAGE, MOCK_CODE, mockResponse.config, {}, mockResponse);

    expect.assertions(1);

    try {
      throwFormattedError(mockAxiosError, false);
    } catch (err) {
      expect(err).toEqual(MOCK_ERROR_MESSAGE);
    }
  });
});
