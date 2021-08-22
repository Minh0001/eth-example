/**
 * Example
 * const ws = useWebSocket(
 *   `${BASE_WEB_SOCKET_URL}${Constants?.manifest?.extra?.projectId}`,
 *   {
 *     onOpen(event) {
 *       console.log(event);
 *       ws?.send(
 *         JSON.stringify({
 *           jsonrpc: "2.0",
 *           id: 1,
 *           method: "eth_subscribe",
 *           params: ["newHeads"],
 *         })
 *       );
 *     },
 *     onMessage(event) {
 *       console.log("onMessage", event);
 *     },
 *     onError(event) {
 *       console.log("onError", event);
 *     },
 *     onClose(event) {
 *       console.log("onClose", event);
 *     },
 *   }
 * );
 */
import { useEffect, useRef } from "react";

type UseWebSocketOptions = {
  onOpen?: (event: Event) => void;
  onMessage?: (event: MessageEvent<any>) => void;
  onError?: (event: Event) => void;
  onClose?: (event: CloseEvent) => void;
};

const useWebSocket = (url: string, options?: UseWebSocketOptions) => {
  const ws = useRef<WebSocket>();

  useEffect(() => {
    ws.current = new WebSocket(url);
    if (options?.onOpen) ws.current.onopen = options.onOpen;
    if (options?.onMessage) ws.current.onmessage = options.onMessage;
    if (options?.onError) ws.current.onerror = options.onError;
    if (options?.onClose) ws.current.onclose = options.onClose;
  }, [url]);

  return ws.current;
};

export default useWebSocket;
