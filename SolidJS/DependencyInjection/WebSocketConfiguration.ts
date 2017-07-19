//https://codeburst.io/understanding-solid-principles-dependency-injection-d570c15560ab

export interface WebSocketConfiguration {
  uri: string;
  options?: Object;
}
export interface SocketFactory {
  createSocket(configuration: WebSocketConfiguration): any;
}
