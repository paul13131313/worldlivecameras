// Google Cast SDK 型定義（Sender SDK + chrome.cast）
// SDKは index.html の <script> タグでグローバルに読み込まれる

declare namespace chrome.cast {
  enum AutoJoinPolicy {
    ORIGIN_SCOPED = 'origin_scoped',
  }
}

declare namespace cast.framework {
  enum SessionState {
    SESSION_STARTED = 'SESSION_STARTED',
    SESSION_RESUMED = 'SESSION_RESUMED',
    SESSION_ENDED = 'SESSION_ENDED',
  }

  enum CastContextEventType {
    SESSION_STATE_CHANGED = 'SESSION_STATE_CHANGED',
  }

  interface CastDevice {
    friendlyName: string;
  }

  interface CastSession {
    getCastDevice(): CastDevice | null;
    sendMessage(namespace: string, message: unknown): Promise<void>;
  }

  interface SessionStateEventData {
    sessionState: SessionState;
  }

  interface CastOptions {
    receiverApplicationId: string;
    autoJoinPolicy: chrome.cast.AutoJoinPolicy;
  }

  class CastContext {
    static getInstance(): CastContext;
    setOptions(options: CastOptions): void;
    getCurrentSession(): CastSession | null;
    addEventListener(
      type: CastContextEventType,
      handler: (event: SessionStateEventData) => void
    ): void;
  }

  class CastReceiverContext {
    static getInstance(): CastReceiverContext;
    addCustomMessageListener(
      namespace: string,
      handler: (event: { data: unknown }) => void
    ): void;
    start(options?: CastReceiverOptions): void;
  }

  class CastReceiverOptions {
    disableIdleTimeout?: boolean;
  }
}
