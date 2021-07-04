export interface TimestampedNumber {
  number: number;
  timestamp: number;
}

export interface RequestStatus {
  status: 'error' | 'success';
}
