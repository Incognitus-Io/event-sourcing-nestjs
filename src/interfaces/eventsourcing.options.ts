export type EventSourcingOptions =
  | EventStoreMongoOptions
  | EventStoreRedisOptions
  | EventStoreTingoDbOptions
  | EventStoreElasticSearchOptions
  | EventStoreAzureTableOptions
  | EventStoreDynamoDbOptions;

interface EventStoreBaseOptions {
  emitStoreEvents?: boolean;
}

interface EventStoreTableOptions {
  eventTableName?: string;
  snapshotsTableName?: string;
}

interface EventStoreTimeoutOptions {
  timeout?: number;
}

interface EventStoreEventAndSnapshotOptions {
  eventCollectionName?: string;
  snapshotCollectionName?: string;
  maxSnapshotsCount?: number;
}

export interface EventStoreMongoOptions
  extends EventStoreBaseOptions,
    EventStoreTimeoutOptions,
    EventStoreEventAndSnapshotOptions {
  type?: 'mongodb';
  host?: string;
  port?: number;
  dbName?: string;
  transactionsCollectionName?: string;
  authSource?: string;
  username?: string;
  password?: string;
  url?: string;
  positionCollectionName?: string;
  options?: {
    ssl?: boolean;
  };
}

export interface EventStoreRedisOptions
  extends EventStoreBaseOptions,
    EventStoreTimeoutOptions,
    EventStoreEventAndSnapshotOptions {
  type: 'redis';
  host?: string;
  port?: number;
  db?: number;
  prefix?: string;
  password?: string;
}

export interface EventStoreTingoDbOptions
  extends EventStoreBaseOptions,
    EventStoreTimeoutOptions,
    EventStoreEventAndSnapshotOptions {
  type: 'tingodb';
  dbPath?: string;
}

export interface EventStoreElasticSearchOptions extends EventStoreBaseOptions {
  type: 'elasticsearch';
  host?: string;
  indexName?: string;
  eventTypeName?: string;
  snapshotTypeName?: string;
  log?: string;
  maxSearchResults?: number;
  maxSnapshotsCount?: number;
}

export interface EventStoreAzureTableOptions
  extends EventStoreBaseOptions,
    EventStoreTableOptions,
    EventStoreTimeoutOptions {
  type: 'azuretable';
  storageAccount: string;
  storageAccessKey: string;
  storageTableHost: string;
}

export interface EventStoreDynamoDbOptions
  extends EventStoreBaseOptions,
    EventStoreTableOptions {
  type: 'dynamodb';
  undispatchedEventsTableName?: string;
  EventsReadCapacityUnits?: number;
  EventsWriteCapacityUnits?: number;
  SnapshotReadCapacityUnits?: number;
  SnapshotWriteCapacityUnits?: number;
  UndispatchedEventsReadCapacityUnits?: number;
  UndispatchedEventsWriteCapacityUnits?: number;
  useUndispatchedEventsTable?: boolean;
  eventTableStreamEnabled?: boolean;
  eventTableStreamViewType?: string;
}
