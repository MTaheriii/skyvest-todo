export enum StatusEnum {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCEEDED = 'succeeded',
  FAILED = 'failed',
}
export type SliceStatus =
  | StatusEnum.IDLE
  | StatusEnum.LOADING
  | StatusEnum.SUCCEEDED
  | StatusEnum.FAILED