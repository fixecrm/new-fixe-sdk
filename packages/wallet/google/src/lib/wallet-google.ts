import { AwsCredentialIdentity, MemoizedProvider } from '@smithy/types';
import { handleRequest } from '../utils/api-request';
import {
  GetObjectUrlResponseDto,
  UpdateClassRequest,
  UpdateObjectRequest,
} from './dto';

export class WalletGoogleClient {
  private readonly region: string;
  private readonly endpoint: string;
  private readonly credentials: MemoizedProvider<AwsCredentialIdentity>;

  constructor(credentials: MemoizedProvider<AwsCredentialIdentity>, region: string, endpoint: string) {
    this.region = region;
    this.endpoint = endpoint;
    this.credentials = credentials;
  }

  public async getObjectUrl(
    userId: string,
    passbookId: string
  ): Promise<GetObjectUrlResponseDto> {
    return await handleRequest(
      this.credentials,
      this.region,
      this.endpoint,
      'GET',
      '/get-object-url',
      undefined,
      {
        userId,
        passbookId,
      }
    );
  }

  public async updateObject(request: UpdateObjectRequest): Promise<unknown> {
    return await handleRequest(
      this.credentials,
      this.region,
      this.endpoint,
      'POST',
      '/update-object',
      undefined,
      undefined,
      request
    );
  }

  public async updateClass(request: UpdateClassRequest): Promise<unknown> {
    return await handleRequest(
      this.credentials,
      this.region,
      this.endpoint,
      'POST',
      '/update-pass',
      undefined,
      undefined,
      request
    );
  }
}
