import { Sha256 } from '@aws-crypto/sha256-js';
import { HttpRequest } from '@smithy/protocol-http';
import { FetchHttpHandler } from '@smithy/fetch-http-handler';
import { SignatureV4 } from '@smithy/signature-v4';
import { AwsCredentialIdentity, MemoizedProvider } from '@smithy/types';

export const handleRequest = async (
  credentials: MemoizedProvider<AwsCredentialIdentity>,
  region: string,
  hostname: string,
  method: string,
  path: string,
  headers?: Record<string, string>,
  query?: HttpRequest['query'],
  body?: unknown,
  service = 'execute-api',
) => {
  const handler = new FetchHttpHandler();

  const request = new HttpRequest({
    body: body ? JSON.stringify(body) : undefined,
    headers: {
      'Content-Type': 'application/json',
      host: hostname,
      ...headers,
    },
    hostname: hostname,
    method: method.toUpperCase(),
    path,
    query,
  });
  const signer = new SignatureV4({
    region,
    credentials,
    service,
    sha256: Sha256,
  });

  const signedRequest = await signer.sign(request);

  const resp = await handler.handle(signedRequest as HttpRequest);
  const data = resp.response.body as ReadableStream;
  const ret = await new Response(data).json();
  return ret;
};
