import { useState, useEffect, useCallback, useRef } from 'react';

const NAMESPACE = 'urn:x-cast:com.worldlivecameras.channel';
const CAST_APP_ID = import.meta.env.VITE_CAST_APP_ID as string;

export interface CastCamera {
  videoId: string;
  label: string;
}

interface ChannelMessage {
  type: 'LOAD_CHANNEL';
  channelId: string;
  cameras: CastCamera[];
}

interface CastState {
  isAvailable: boolean;
  isConnected: boolean;
  deviceName: string | null;
}

// Cast SDK のグローバル型（SDKが<script>で読み込まれるため）
declare global {
  interface Window {
    __onGCastApiAvailable?: (isAvailable: boolean) => void;
  }
}

export function useCast() {
  const [state, setState] = useState<CastState>({
    isAvailable: false,
    isConnected: false,
    deviceName: null,
  });
  const sessionRef = useRef<cast.framework.CastSession | null>(null);

  // SDK初期化
  useEffect(() => {
    if (!CAST_APP_ID) return;

    const initCast = () => {
      const castContext = cast.framework.CastContext.getInstance();
      castContext.setOptions({
        receiverApplicationId: CAST_APP_ID,
        autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED,
      });

      setState((prev) => ({ ...prev, isAvailable: true }));

      // セッション状態の変更を監視
      castContext.addEventListener(
        cast.framework.CastContextEventType.SESSION_STATE_CHANGED,
        (event: cast.framework.SessionStateEventData) => {
          const session = castContext.getCurrentSession();
          sessionRef.current = session;

          if (
            event.sessionState === cast.framework.SessionState.SESSION_STARTED ||
            event.sessionState === cast.framework.SessionState.SESSION_RESUMED
          ) {
            setState({
              isAvailable: true,
              isConnected: true,
              deviceName: session?.getCastDevice()?.friendlyName ?? null,
            });
          } else if (
            event.sessionState === cast.framework.SessionState.SESSION_ENDED
          ) {
            sessionRef.current = null;
            setState({
              isAvailable: true,
              isConnected: false,
              deviceName: null,
            });
          }
        }
      );
    };

    // Cast SDKのロード完了コールバック
    if (typeof cast !== 'undefined' && cast.framework) {
      initCast();
    } else {
      window.__onGCastApiAvailable = (isAvailable: boolean) => {
        if (isAvailable) initCast();
      };
    }
  }, []);

  // チャンネルデータをReceiverに送信
  const sendChannel = useCallback((channelId: string, cameras: CastCamera[]) => {
    const session = sessionRef.current;
    if (!session) return;

    const message: ChannelMessage = {
      type: 'LOAD_CHANNEL',
      channelId,
      cameras: cameras.slice(0, 4),
    };

    session.sendMessage(NAMESPACE, message);
  }, []);

  return {
    ...state,
    sendChannel,
  };
}
