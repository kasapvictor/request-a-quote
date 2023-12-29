// api-request.test.ts
import AxiosMockAdapter from 'axios-mock-adapter';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';

import { api } from './api';
import { apiRequest } from './api-request';
import { BASE_URL } from './config';
import { Method } from './types';

describe('API Request Function', () => {
  let mock: AxiosMockAdapter;
  let url: string;

  beforeEach(() => {
    mock = new AxiosMockAdapter(api);
    url = `${BASE_URL}/test`;
  });

  afterEach(() => {
    mock.restore();
  });

  // Get
  it('1) Should be Get method', async () => {
    const mockData = { message: 'Get Done' };
    mock.onGet(url).reply(200, mockData);

    const response = await apiRequest({ url, method: Method.Get });
    expect(response).toEqual(mockData);
  });

  // Post
  it('2) Should be Post method no data', async () => {
    const mockData = { message: 'Success' };

    mock.onPost(url).reply(200, mockData);

    const response = await apiRequest({ url });
    expect(response).toEqual(mockData);
  });

  it('3) Should be Post method with data', async () => {
    const data = { a: 1, b: 2 };
    const mockData = { message: 'With Data' };

    mock.onPost(url).reply((config) => {
      if (config.url === url && config.method === 'post' && config.data === JSON.stringify(data)) {
        return [200, mockData];
      }

      return [404];
    });

    const response = await apiRequest({ url, method: Method.Post, data });
    expect(response).toEqual(mockData);
  });

  it('4) Should be Post method with params', async () => {
    const params = { query: 'test' };
    const mockData = { message: 'With Params' };

    mock.onPost(url).reply((config) => {
      if (config.url === url && config.method === 'post' && JSON.stringify(config.params) === JSON.stringify(params)) {
        return [200, mockData];
      }

      return [404];
    });

    const response = await apiRequest({ url, method: Method.Post, params });
    expect(response).toEqual(mockData);
  });

  // PUT
  it('5) Should be PUT method', async () => {
    const mockData = { message: 'Put Done' };
    mock.onPut(url).reply(200, mockData);

    const response = await apiRequest({ url, method: Method.Put });
    expect(response).toEqual(mockData);
  });

  // DELETE
  it('6) Should be DELETE method', async () => {
    const mockData = { message: 'Delete Done' };
    mock.onDelete(url).reply(200, mockData);

    const response = await apiRequest({ url, method: Method.Delete });
    expect(response).toEqual(mockData);
  });

  // ERRORS
  it('7) Should throw an error on API failure 500', async () => {
    mock.onPost(url).reply(500);

    expect.assertions(1);

    try {
      await apiRequest({ url });
    } catch (err) {
      expect(err).toEqual(500);
    }
  });

  it('8) Should throw an error on API failure 400', async () => {
    mock.onGet(url).reply(400);

    expect.assertions(1);

    try {
      await apiRequest({ url, method: Method.Get });
    } catch (err) {
      expect(err).toEqual(400);
    }
  });

  it('9) Should throw an error message', async () => {
    const MOCK_ERROR = 'Test error';
    const MOCK_ERROR_MESSAGE = 'Error message';

    const mockError = {
      response: {
        data: {
          message: MOCK_ERROR_MESSAGE,
          error: MOCK_ERROR,
          status: 400,
        },
      },
    };

    mock.onGet(url).reply(400, mockError.response.data);

    expect.assertions(1);

    try {
      await apiRequest({ url, method: Method.Get });
    } catch (err) {
      expect(err).toEqual(MOCK_ERROR);
    }
  });

  it('10) Should throw with throw Error', async () => {
    const MOCK_ERROR = 'Test error';
    const MOCK_ERROR_MESSAGE = 'Error message';

    const mockError = {
      response: {
        data: {
          message: MOCK_ERROR_MESSAGE,
          error: MOCK_ERROR,
          status: 400,
        },
      },
    };

    mock.onGet(url).reply(400, mockError.response.data);

    expect.assertions(1);

    try {
      await apiRequest({ url, method: Method.Get, withThrow: true });
    } catch (err) {
      expect(err).toEqual(new Error(MOCK_ERROR));
    }
  });

  // UPLOADS
  it('11) Should be upload file', async () => {
    const mockData = { message: 'File uploaded successfully' };
    const mockFile = new File(['mock content'], 'test.txt', { type: 'text/plain' });
    const formData = new FormData();

    formData.append('file', mockFile);

    mock.onPost(url).reply((config) => {
      if (config.url === url && config.method === 'post' && config.data === formData) {
        return [200, mockData];
      }

      return [400];
    });

    const response = await apiRequest({ url, method: Method.Post, data: formData });
    expect(response).toEqual(mockData);
  });
});
